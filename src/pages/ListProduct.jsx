import React, { useEffect, useState } from "react";
import { deleteProduct, getProduct } from "../api/product";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";

export const ListProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadProduct() {
    setLoading(true);
    const response = await getProduct();
    setData(response);
    setLoading(false);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  const handleDelete = (item) => {
    try {
      Swal.fire({
        title: "Confirmar eliminado!",
        icon: "warning",
        html: `<i>Desea eliminar el producto <strong>${item.nombre}</strong>?</i>`,
        showCancelButton: true,
        confirmButtonText: "Eliminar!",
        cancelButtonText: "Cancelar!",
        confirmButtonColor: "#157347",
        cancelButtonColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          const response = deleteProduct(item.id).then(() => {
            loadProduct();
          });
          Swal.fire({
            title: "Eliminacion existosa!",
            html: `<i>Producto <strong>${item.nombre}</strong> eliminado con exito</i>`,
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="pt-5">
        <Loading colorBlack />
      </div>
    );
  } else {
    return (
      <div className="container mt-5">
        {!data.length ? (
          <h2>No hay datos</h2>
        ) : (
          <div className="table-responsive">
            <table className="table  table-hover">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Codigo</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.codigo}</td>
                    <td>{item.nombre}</td>
                    <td>{item.cantidad}</td>
                    <td>
                      {Intl.NumberFormat("es-CO", {
                        style: "currency",
                        currency: "COP",
                        maximumSignificantDigits: 3,
                      }).format(item.precio)}
                    </td>
                    <td>
                      <Link
                        to={`/edit/${item.id}`}
                        className="btn btn-warning m-2"
                      >
                        Editar
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
};
