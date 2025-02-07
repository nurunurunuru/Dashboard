import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Productable = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", color: "", capacity: "", price: "" });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.restful-api.dev/objects"); // Replace with actual API URL
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://api.restful-api.dev/objects/${id}`, { method: "DELETE" });
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newProduct.name, data: newProduct })
      });
      const data = await response.json();
      setProducts([...products, data]);
      setIsModalOpen(false);
      setNewProduct({ name: "", color: "", capacity: "", price: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 ml-10">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Product List</h2>
          <button onClick={() => setIsModalOpen(true)} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">Add Product</button>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">ID</th>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Color</th>
                  <th className="py-3 px-6 text-left">Capacity</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6">{product.id}</td>
                    <td className="py-3 px-6 font-medium">{product.name}</td>
                    <td className="py-3 px-6">{product.data?.color || "N/A"}</td>
                    <td className="py-3 px-6">{product.data?.capacity || "N/A"}</td>
                    <td className="py-3 px-6">${product.data?.price || "N/A"}</td>
                    <td className="py-3 px-6">
                      <button onClick={() => handleDelete(product.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <input type="text" placeholder="Name" className="w-full p-2 border mb-2" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
            <input type="text" placeholder="Color" className="w-full p-2 border mb-2" value={newProduct.color} onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })} />
            <input type="text" placeholder="Capacity" className="w-full p-2 border mb-2" value={newProduct.capacity} onChange={(e) => setNewProduct({ ...newProduct, capacity: e.target.value })} />
            <input type="text" placeholder="Price" className="w-full p-2 border mb-4" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
            <div className="flex justify-end">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded mr-2">Cancel</button>
              <button onClick={handleAddProduct} className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Productable;
