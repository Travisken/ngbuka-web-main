"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "react-modal";
import { useRef } from "react";

export default function Inventory() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [token, setToken] = useState(null);

  const fetchUserToken = async () => {
    try {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        const token = parsedData.entity?.token;
        console.log("Fetched token:", token);
        return token;
      }
    } catch (error) {
      console.error('Error fetching user token:', error);
    }
  };
    const [itemData, setItemData] = useState({
        productName: "",
        category: "",
        stock: "",
        price: "",
        description: "",
        brand: "",
        volume: "",
        weight: "",
        type: "",
        color: "",
        condition: "",
        nafdacNo: "",
        com: "",
        sku: "",
        images: [] // Store image files here
    });

    const imageInputRef = useRef(null); // Reference to the file input element

    // Handle file change event
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        setItemData({ ...itemData, images: [file] });
    };

    // Clear selected image
    const clearSelectedImage = () => {
        setSelectedImage(null);
        setItemData({ ...itemData, images: [] });
        // Reset file input value
        imageInputRef.current.value = null;
    };


    const router = useRouter();
    if (!router || !router.query || !router.query.id) {
        // Return a loading state or handle the case when id is not available
        return <div>Loading...</div>;
    }

    // Destructure id from router.query
    const { id } = router.query;

    
    useEffect(() => {
        async function fetchItemData() {
            try {
                const res = await fetch(`https://74.48.46.59/api/v1/dealer/spare-parts/${itemId}`, {
                    method: 'GET',
                    headers: {
                      'Authorization': `Bearer ${token}`
                    }
                  });
                const data = await res.json();
                setItemData({
                    productName: data.name,
                    category: data.category,
                    stock: data.quantityInStock,
                    price: data.price,
                    description: data.description,
                    brand: data.brand,
                    volume: data.volume,
                    weight: data.weight,
                    type: data.type,
                    color: data.color,
                    condition: data.condition,
                    nafdacNo: data.nafdacNo,
                    com: data.com,
                    sku: data.sku
                });
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchItemData();
    }, []);

    console.log(itemData)

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleOutsideClick = (event) => {
        if (event.target.id === "modal") {
            closeModal();
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleEditClick = () => {
        setIsEditable(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://74.48.46.59/api/v1/dealer/spare-parts/${itemId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemData)
            });
            if (res.ok) {
                alert("Item updated successfully!");
                setIsEditable(false);
            } else {
                alert("Failed to update item. Please try again.");
            }
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    return (
        <>
            <section className="w-full flex flex-col gap-8">
                <div className="bg-white rounded-lg flex px-4 w-full py-4 text-xl font-semibold">
                    Inventory
                </div>

                <section className="flex gap-4 items-start justify-between">
                    <div>
                        <p className="font-semibold text-lg text-zinc-400">
                            Product image
                        </p>
                        <Image height={300} width={400} src="/images/Motor oil image.png" className="rounded-xl w-[34rem] h-[20rem]" alt="Product Image" />
                    </div>
                    <div className="flex flex-col gap-4 mt-7">
                        <div className="bg-[#D1D1E4] flex items-center py-2 px-4 rounded-lg">
                            Product id: 1234567
                            <Image height={20} width={20} src="/icons/Copy.png" alt="Copy Icon" />
                        </div>

                        <div className="flex gap-4">
                            <Image height={100} width={100} src="/images/Spark plug.png" className="rounded-lg" alt="Spark plug" />
                            <Image height={100} width={100} src="/images/Spark plug.png" className="rounded-lg" alt="Spark plug" />
                            <Image height={100} width={100} src="/images/Spark plug.png" className="rounded-lg" alt="Spark plug" />
                        </div>

                        <div className="image-container" style={{ backgroundImage: `url(${selectedImage})` }}>
                {selectedImage && (
                    <button onClick={clearSelectedImage} className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md">Change</button>
                )}
                <label htmlFor="images" className="absolute bottom-0 right-0 bg-gray-100 text-gray-800 px-2 py-1 rounded-md cursor-pointer">Select Image</label>
                <input
                    type="file"
                    id="images"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                />
            </div>
            {/* Button to save changes */}
            <button onClick={saveChanges}>Save Changes</button>


                        <div className="flex flex-col gap-4 items-center justify-center">
                            <button onClick={handleEditClick} className="flex w-full items-center justify-center py-2 px-4 rounded-full bg-secondary-400 text-white">Edit details</button>
                            <button className="flex w-full items-center justify-center py-2 px-4 rounded-full border-2 text-secondary-400 border-secondary-400">Close-list product</button>
                            <span onClick={openModal} className="text-danger cursor-pointer">
                                Delete from inventory
                            </span>
                        </div>
                    </div>
                </section>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 w-full">
                    <section className="flex gap-4 w-full">
                        <div className="flex flex-1 flex-col">
                            <h2 className="font-semibold text-lg">Product details</h2>
                            <section className="mt-8 flex flex-col gap-8">
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="productName">Product name</label>
                                    <input
                                        type="text"
                                        name="productName"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.productName}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.category}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="stock">No. in stock</label>
                                    <input
                                        type="text"
                                        name="stock"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.stock}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="price">Listed price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.price}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white h-[20rem]">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="description">Product Description</label>
                                    <textarea
                                        name="description"
                                        className="bg-transparent outline-none border-none w-full"
                                        value={itemData.description}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                            </section>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <h2 className="font-semibold text-lg">Specifications</h2>
                            <section className="flex flex-col gap-8 mt-8">
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="brand">Brand</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.brand}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="volume">Volume</label>
                                    <input
                                        type="text"
                                        name="volume"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.volume}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="weight">Weight</label>
                                    <input
                                        type="text"
                                        name="weight"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.weight}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="type">Type</label>
                                    <input
                                        type="text"
                                        name="type"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.type}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="color">Color</label>
                                    <input
                                        type="text"
                                        name="color"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.color}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="condition">Condition</label>
                                    <input
                                        type="text"
                                        name="condition"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.condition}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="nafdacNo">Nafdac No.</label>
                                    <input
                                        type="text"
                                        name="nafdacNo"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.nafdacNo}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="com">COM</label>
                                    <input
                                        type="text"
                                        name="com"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.com}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                                <div className="relative flex border-2 rounded-xl p-2 w-full bg-white">
                                    <label className="absolute top-[-1.5rem] left-2 text-sm" htmlFor="sku">SKU</label>
                                    <input
                                        type="text"
                                        name="sku"
                                        className="bg-transparent outline-none border-none"
                                        value={itemData.sku}
                                        onChange={handleInputChange}
                                        disabled={!isEditable}
                                    />
                                </div>
                            </section>
                        </div>
                    </section>

                    <div className="flex flex-row-reverse gap-4 items-center justify-start mt-8">
                        <button onClick={handleEditClick} className="max-w-[12rem] flex w-full items-center justify-center py-2 px-4 rounded-full bg-secondary-500 text-white">Edit details</button>
                        <button className="max-w-[12rem] flex w-full items-center justify-center py-2 px-4 rounded-full border-2 text-secondary-500 border-secondary-400">Close-list product</button>
                        <span onClick={openModal} className="text-danger cursor-pointer">Delete from inventory</span>
                    </div>
                </form>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    id="modal"
                    onClick={handleOutsideClick}
                    className="m-auto flex flex-col h-[100vh] w-[40vw] z-[100] items-center justify-center relative border-none outline-none"
                >
                    <section className="flex flex-col items-center justify-center gap-4">
                        <div className="m-auto bg-white rounded-2xl border-none outline-none p-4 h-[40vh] flex flex-col items-center justify-center gap-4 w-[40vw]">
                            <div className="font-semibold text-xl flex pt-4 items-center w-full border-b pb-4 justify-between">
                                <div className="flex gap-4 items-center">
                                    <Image height={25} width={25} className="rounded-full" alt="#" src="/icons/icon.png"></Image>
                                    <p>Delete product</p>
                                </div>
                                <button onClick={closeModal} className="rounded-full">
                                    <Image height={20} width={20} className="rounded-full" alt="#" src="/icons/X-r.png"></Image>
                                </button>
                            </div>
                            <p className="text-sm text-zinc-400">
                                Deleting this product from your inventory is permanent and will remove it from your store and the Ngbuka market place.
                            </p>
                            <div className="flex items-center gap-8 justify-between w-full">
                                <button className="flex px-20 py-2 rounded-full items-center justify-center">Cancel</button>
                                <button className="flex px-8 py-2 rounded-full items-center justify-center bg-secondary-500 text-white">Yes, delete product</button>
                            </div>
                        </div>
                        <button onClick={closeModal} className="p-4 rounded-full bg-white">
                            <Image height={20} width={20} className="rounded-full" alt="#" src="/icons/X-r.png"></Image>
                        </button>
                    </section>
                </Modal>
            </section>
        </>
    );
}
