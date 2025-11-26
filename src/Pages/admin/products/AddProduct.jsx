import React, { useState } from 'react'
import { CreateProduct } from '../../../api/NwConfig';
import CreateProductApi from '../../../api/AuthAPI/CreateProductApi';

export default function AddProduct() {

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        packeging: [
            {
                productQuentity: '',
                price: '',
                OrderUnit: '',
                bigPackagSize: '',
                bpPrice: ''
            }
        ],
        image: ''
    });

    const [ImageFile, setImageFile] = useState(null)

    // normal form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // packaging form change
    const handlePackegChange = (index, e) => {
        const { name, value } = e.target;
        const updated = [...formData.packeging];
        updated[index][name] = value;
        setFormData({ ...formData, packeging: updated });
    };

    // Remove a packaging block
    const handleRemovePackeging = (index) => {
        const updated = formData.packeging.filter((_, i) => i !== index);
        setFormData({ ...formData, packeging: updated });
    };

    // Add new packaging block
    const addPackeg = () => {
        setFormData({
            ...formData,
            packeging: [
                ...formData.packeging,
                {
                    productQuentity: '',
                    price: '',
                    OrderUnit: '',
                    bigPackagSize: '',
                    bpPrice: ''
                }
            ]
        });
    };

    // Submit
    const submit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // const data = new FormData()
        // data.append("name", formData.name)
        // data.append("category", formData.category)
        // data.append("packeging", JSON.stringify(formData.packeging))
        // data.append("image", ImageFile)
        if (!formData) {
            alert(`Somthing want's rong !!`)
        }
        // console.log("Final FormData:", [...data.entries()]);
        const responce = await CreateProductApi(formData);
        console.log("responce :", responce);

    };

    return (
        <div className="max-w-2xl bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Add Product</h2>

            <form className="mt-3 space-y-3" onSubmit={submit}>

                {/* PRODUCT NAME */}
                <div>
                    <label className="block text-sm">Product name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                        required
                    />
                </div>

                {/* CATEGORY */}
                
                <div>
                    <label className="block text-sm">Category</label>
                    <select
                       name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded bg-white"
                        required

                    >
                        <option value="">Select Category</option>
                        <option value="achar">Achar</option>
                        <option value="murabba & candy">Murabba & Candy</option>
                        <option value="papard">Papard</option>
                        <option value="rice papard">Rice Papard</option>
                        <option value="fry papard">Fry Papard</option>
                        <option value="imported fryms">Imported Fryms</option>  
                        <option value="figur fryms">Figur Fryms</option>
                        <option value="noodels">Noodels</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <p className="block text-sm font-medium">Packaging:</p>

                {/* PACKAGING BLOCK */}
                {formData.packeging.map((value, index) => (
                    <div key={index} className="px-5 border py-2 rounded">

                        <div className="w-full flex justify-end">
                            <p
                                onClick={() => handleRemovePackeging(index)}
                                className="cursor-pointer text-red-500 font-bold"
                            >
                                X
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">

                            {/* QUANTITY */}
                            <div>
                                <label className="block text-sm">Quantity</label>
                                <input
                                    name="productQuentity"
                                    type="text"
                                    value={value.productQuentity}
                                    onChange={(e) => handlePackegChange(index, e)}
                                    className="w-full mt-1 p-2 border rounded"
                                    required
                                />
                            </div>

                            {/* PRICE */}
                            <div>
                                <label className="block text-sm">Price (per unit)</label>
                                <input
                                    name="price"
                                    type="number"
                                    value={value.price}
                                    onChange={(e) => handlePackegChange(index, e)}
                                    className="w-full mt-1 p-2 border rounded"
                                    required

                                />
                            </div>

                            {/* ORDER UNIT */}
                            <div>
                                <label className="block text-sm">Order Unit</label>
                                <select
                                    name="OrderUnit"
                                    value={value.OrderUnit}
                                    onChange={(e) => handlePackegChange(index, e)}
                                    className="w-full mt-1 p-2 border rounded bg-white"
                                    required

                                >
                                    <option value="">Select Unit</option>
                                    <option value="JAR">JAR</option>
                                    <option value="PACK">PACK</option>
                                    <option value="BOX">BOX</option>
                                    <option value="KG">KG</option>
                                </select>
                            </div>

                            {/* BOX QUANTITY */}
                            <div>
                                <label className="block text-sm">Box Quantity</label>
                                <input
                                    name="bigPackagSize"
                                    type="number"
                                    value={value.bigPackagSize}
                                    onChange={(e) => handlePackegChange(index, e)}
                                    className="w-full mt-1 p-2 border rounded"
                                    required

                                />
                            </div>

                            {/* BOX PRICE */}
                            <div>
                                <label className="block text-sm">Price (Box)</label>
                                <input
                                    name="bpPrice"
                                    type="number"
                                    value={value.bpPrice}
                                    onChange={(e) => handlePackegChange(index, e)}
                                    className="w-full mt-1 p-2 border rounded"
                                    required

                                />
                            </div>

                        </div>
                    </div>
                ))}

                {/* BUTTON to add packaging */}
                <div className="w-full flex justify-end">
                    <button
                        type="button"
                        onClick={addPackeg}
                        className="px-3 py-1 bg-sky-500 text-white rounded"
                    >
                        + Add Packaging
                    </button>
                </div>

                {/* IMAGE */}
                <div>
                    <label className="block text-sm">Image</label>
                    <input
                        name="image"
                        type="file"
                        // onChange={(e) => setImageFile(e.target.files[0])}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded"
                        required

                    />
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-2">
                    <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded"
                        type="submit"
                    >
                        Create product
                    </button>

                    <button
                        type="reset"
                        onClick={() =>
                            setFormData({
                                name: '',
                                category: '',
                                packeging: [
                                    {
                                        productQuentity: '',
                                        price: '',
                                        OrderUnit: '',
                                        bigPackagSize: '',
                                        bpPrice: ''
                                    }
                                ],
                                image: ''
                            })
                        }
                        className="px-4 py-2 border rounded"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}
