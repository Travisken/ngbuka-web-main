"use client";
import Image from "next/image"
import { PiChecks } from "react-icons/pi";
import { Dropdown } from "@/components/Atoms";
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import {orderListData} from '@/libs/constants'
import { FaLocationDot } from "react-icons/fa6";
import { PiWarningOctagon } from "react-icons/pi";
import {useState} from 'react'

function processOrderCollection(
    {
        searchParams,
    }
) {

const [modalIsOpen, setModalIsOpen] = useState(false);
const [modalIsOpens, setModalIsOpens] = useState(false);
      // Function to open the modal
        const [selectedOption, setSelectedOption] = useState('');
        const [selectedOptions, setSelectedOptions] = useState('');
        const handleOptionChange = (event) => {
          setSelectedOption(event.target.value);
        };
        
        const items = orderListData.find((item)=> item.id == searchParams.id)

  // Function to close the modal

  // Function to close the modal
  const openModal = () => {
    setModalIsOpen(true);
  };


  // if(modalIsOpen === false){
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedOption('')
  };
  const closeModals = () => {
    setModalIsOpens(false);
    setSelectedOptions('')
  };
  const openModals = () => {
    setModalIsOpens(true);
    closeModal()
  };
  // }
  const handleOutsideClick = (event) => {
    if (event.target.id === "modal") {
      closeModal();
    }
  };


  const handleOutsideClicks = (event) => {
    if (event.target.id === "modal1") {
      closeModal();
    }
  };

    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
        // Add more options as needed
    ];

    const dropdownProps = {
        options: options, // Pass the options array
        name: "myDropdown", // Example of other props you might pass
        isDisabled: false,
        isClearable: true,
        defaultValue: null,
        className: "my-dropdown",
        width: '454',
        height: '60',
        isError: false,
        errorMessage: "",
        dbName: "myDropdownValue",
        register: null,
        setValue: () => { },
        outerClass: "",
        value: null,
        isMulti: false,
        label: "",
        id: "myDropdownId",
        onChange: (selectedValue) => {
            console.log("Selected value:", selectedValue);
        }
        // Add other props as needed
    };
    return (
        <>
            <section className="w-full pb-10 flex flex-col gap-8">
                <div className="  text-black gap-[24px] flex flex-col h-fit w-fit">
                    <span className="w-[928px] h-fit p-[20px] bg-white rounded-[16px] text-[27px] font-[700]">
                        <h1>Process Order</h1>
                    </span>
                    <section>
                        <div className="w-[928px] text-[20px] text-[#ACACB2] flex items-center justify-between h-fit border-b-[1px] font-[600] border-[#D4D4D4]">
                            <Link href={{
                            pathname: '/Dashboard/orders/processorder/',
                            query: {
                                id: items.id
                            }
                        }}><button className="flex items-center justify-center gap-[8px] text-[#2BAF29] w-fit h-fit">Order confirmation <PiChecks /></button></Link>
                            <button className="text-white bg-[#1A1A7A] px-[20px] py-[12px]">Summary</button>
                        </div>
                        <header className="w-[928px] h-fit flex items-center justify-between">
                            <section className="flex flex-col pt-[18px] gap-[20px] w-[454px] h-fit">
                                <h1 className="font-[600] text-[20px] text-[#585865]">Store Location</h1>
                                <span className="w-[444px] h-fit"><Dropdown {...dropdownProps} /></span>
                                <h1 className="font-[600] text-[20px] text-[#585865]">Collection</h1>
                                <div className="w-[454px] gap-[20px] bg-white h-fit flex flex-col items-start justify-start rounded-[16px] p-[20px]">
                                    <ul className="flex w-full justify-between items-center">
                                    <h2 className="font-[600] text-[16px]">Center 2</h2>
                                    <li className="text-[#1A1A7A] text-[16px] font-[400]">Change center</li>
                                    </ul>
                                    <p className="capitalize text-[14px] font-[400]">3 oil-mill Road, Eleme Junction,<br /> Eleme, Rivers state</p>
                                </div>
                                <button onClick={openModal} className="w-[454px] h-[62px] text-white text-[16px] font-[400] rounded-[24px] bg-[#AA5F03]">Notify agent</button>
                                <p className="flex items-start justify-center gap-[8px] w-fit h-fit text-[12px] font-[400]"><PiWarningOctagon className="text-3xl text-red-600" />Confirm the order ID matches the pick-up notice of the agent before releasing the order for pick-up</p>
                            </section>
                            {/* item sect */}
                            <section className="flex flex-col gap-[20px] w-[454px] h-fit">
                            <h1 className="font-[600] text-[18px] text-[#585865]">Items Ordered(4)</h1>
                            <div className="w-[454px] text-[#262633] rounded-[16px] bg-[white] h-fit p-[20px] gap-[20px] flex flex-col items-center justify-between">
                            <div className="w-fit h-fit gap-[20px] flex items-center justify-center">
                            <Image src={items.img} width={160} height={120} className="rounded-[19.2px]" alt="" />
                            <ul className="flex flex-col gap-[6px]">
                            <li className="text-[14px]">{items.message}</li>
                            <li className="text-[14px] flex gap-[20px] items-center justify-center w-fit h-fit font-[600]"><p>SW-30</p><p>5 litres</p></li>
                            </ul>
                            </div>
                    </div>
                            </section>
                        </header>
                    <Modal
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                      id="modal"
                      onClick={handleOutsideClick}
                      className="m-auto flex h-[100vh] w-full z-[100]  fixed top-0 left-0"
                    >
                        <section className="w-full h-full flex-col gap-[20px] flex items-center justify-center bg-[rgba(0,0,0,0.34)] absolute top-0 left-0">
                        <div className="w-[600px] flex flex-col items-start justify-center gap-[40px] text-[#585865] h-fit bg-white rounded-[16px] p-[40px]">
                            <p className="text-[20px] pb-[8px] border-b-[1px] border-[#ECECEE] font-[600] flex items-center justify-start gap-[8px] w-full h-fit"><FaLocationDot className="text-[#AA5F03]" />Change collection center</p>
                                
                                <ul className="flex items-start flex-col justify-center gap-[10px]">
                                    <li className="font-[600] text-[14px] w-fit h-fit text-[#262633] gap-[4px] flex items-center justify-start"><input type="radio"
                                        value="option1"
                                        checked={selectedOption === 'option1'}
                                        onChange={handleOptionChange}
                                        className="w-[20px] h-[20px]" name="" id="" /><p>Center 1</p></li>
                                    <li className="text-[12px] font-[400] w-[173px]">3 Isiokpo Street, D-line,Port Harcourt, Rivers State</li>
                                </ul>
                                <ul className="flex items-start flex-col justify-center gap-[10px]">
                                    <li className="font-[600] text-[14px] w-fit h-fit text-[#262633] gap-[4px] flex items-center justify-start"><input type="radio"
                                        value="option2"
                                        checked={selectedOption === 'option2'}
                                        onChange={handleOptionChange}
                                        className="w-[20px] h-[20px]" name="" id="" /><p>Center 2</p></li>
                                    <li className="text-[12px] font-[400] w-[173px]">3 Isiokpo Street, D-line,Port Harcourt, Rivers State</li>
                                </ul>
                                <button onClick={openModals} disabled={selectedOption ? false : true} style={{ background: selectedOption ? '#AA5F03' : '#FFC682' }} className="bg-[#ffc681] text-white w-[520px] h-[62px] text-[18px] font-[400] rounded-[24px]">Confirm selection</button>
                        </div>
                            <span onClick={closeModal} className="w-[50px] flex items-center justify-center h-[50px] rounded-full bg-white text-black text-2xl ">
                                <IoMdClose />
                            </span>
                        </section>
                    </Modal>
                    <Modal
                      isOpen={modalIsOpens}
                      onRequestClose={closeModals}
                      contentLabel="Example Modal"
                      id="modal2"
                      onClick={handleOutsideClicks}
                      className="m-auto flex h-[100vh] w-full z-[100]  fixed top-0 left-0"
                    >
                        <section onClick={closeModals} className="w-full h-full flex-col gap-[20px] flex items-center justify-center bg-[rgba(0,0,0,0.34)] absolute top-0 left-0">
                            <div className="px-[20px] bg-white  py-[40px] text-center w-[400px] h-[440px] rounded-[16px] gap-[30px] flex flex-col items-center justify-center">
                                <Image src="/icons/Check with sparkles.svg" width={80} height={60} />
                                <h1 className="text-[20px] font-[600]">Agent nottified</h1>
                                <p className="text-[16px] font-[400]">Your notification has been recieved. An agent will be dispatched shortly to pick up the order.</p>
                                <button className="text-[16px] w-[360px] bg-[#D47604] py-[17.5px] rounded-[24px] font-400 text-white">View order</button>
                                <Link href={''} className="text-[#1A1A7A] ">Back to home</Link>
                            </div>
                        </section>
                    </Modal>
                    </section>
                </div>
            </section>
        </>
    )
}
export default processOrderCollection;