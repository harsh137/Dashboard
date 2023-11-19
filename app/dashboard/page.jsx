"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/Navbar'



function page() {

  const generateRandomUID = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };


  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    salutation: 'Mr',
    name: '',
    position: '',
    fromDate: 2020-10-10,
    toDate: 2023-10-10,
    email: '',
    uid: generateRandomUID(),
    viewed: false
  });
  const [candidateData, setCandidateData] = useState([

  ]);
  const [isLoading,setIsLoading]=useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(false)
  };
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(modalContent.email);
  };
  const handleView = (e) => {

  }
  const saveData =  async() => {
    if ( !modalContent.name || !modalContent.position || !modalContent.fromDate || !modalContent.toDate || !modalContent.email || !modalContent.uid) {
      alert("Please fill all the fields")
      return
    }
    if (!validateEmail()) {
      alert("Please enter a valid email")
      return
    }

    if (modalContent.fromDate >= modalContent.toDate) {
      alert("From date should be less than to date")
      return
    }

    
    console.log(modalContent,"\n11")
    

    try {

      setIsLoading(true);
      

      console.log("FE 1")
      const response=await axios.post("/api/candidate",modalContent)
      console.log("FE 2")
      console.log("register success", response.data);
      setCandidateData([...candidateData,modalContent]);
    } catch (error) {
      console.log("register failed", error.message);
      alert(error);
    } finally {
      
      setIsLoading(false);
      setModalContent({
        salutation: 'Mr',
        name: '',
        position: '',
        fromDate: 2020-10-10,
        toDate: 2023-10-10,
        email: '',
        uid: generateRandomUID(),
        viewed: false
      })
    }
    
    setIsModalOpen(false);
  };
  useEffect(() => {
    const getAllCandi = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/fetch");
        setCandidateData(response.data);
      } catch (error) {
        console.log("fetch failed", error.message);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllCandi();
  }, []);

  return (
    <div className='h-screen'>
      <Navbar />
      <div className="min-h-screen p-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={openModal}>
          GET CERTIFICATE
        </button>





        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            <div className="bg-white p-4 rounded shadow-md w-96 relative z-50">
              <h2 className="text-2xl font-bold mb-4 text-center">ADD CERTIFICATE</h2>
              <select
                className="border p-2 mb-2 block w-full"
                value={modalContent.salutation}
                onChange={(e) => setModalContent({...modalContent,salutation:e.target.value})}
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 mb-2 block w-full"
                value={modalContent.name}
                onChange={(e) => setModalContent({...modalContent,name:e.target.value})}
              />
              <input
                type="text"
                placeholder="Position"
                className="border p-2 mb-2 block w-full"
                value={modalContent.position}
                onChange={(e) => setModalContent({...modalContent,position:e.target.value})}
              />
              <div className="flex mb-2">
                <div className="w-1/2 mr-2">
                  <input
                    type="date"
                    placeholder="From"
                    className="border p-2 block w-full"
                    value={modalContent.fromDate}
                    onChange={(e) => setModalContent({...modalContent,fromDate:e.target.value})}
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="date"
                    placeholder="To"
                    className="border p-2 block w-full"
                    value={modalContent.toDate}
                    onChange={(e) => setModalContent({...modalContent,toDate:e.target.value})}
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Mail ID"
                className="border p-2 mb-2 block w-full"
                value={modalContent.email}
                onChange={(e) => setModalContent({...modalContent,email:e.target.value})}
              />
              <input
                type="text"
                placeholder="UID"
                className="border p-2 mb-2 block w-full"
                value={modalContent.uid}
                disabled
              />
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded mr-2"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded"
                  onClick={saveData}
                  disabled={isLoading?true:false}
                >
                  {isLoading?"Saving...":"Save"}
                </button>
              </div>
            </div>
          </div>
        )}



<table className="w-full border border-collapse border-gray-300 mt-4">
  <thead>
    <tr className="bg-gradient-to-r from-gray-500 to-gray-400 text-white">
      <th className="w-min border p-2">Salutation</th>
      <th className="w-min border p-2">Name</th>
      <th className="w-min border p-2">Position</th>
      <th className="w-min border p-2">From</th>
      <th className="w-min border p-2">To</th>
      <th className="w-min border p-2">Mail ID</th>
      <th className="w-min border p-2">UID</th>
      <th className="w-min border p-2">View File</th>
      <th className="w-min border p-2">Download File</th>
      <th className="w-min border p-2">Send Mail</th>
    </tr>
  </thead>
  <tbody>
    {candidateData.map((candidate, index) => (
      <tr key={index}>
        <td className="w-min border p-2">{candidate.salutation}</td>
        <td className="w-min border p-2">{candidate.name}</td>
        <td className="w-min border p-2">{candidate.position}</td>
        <td className="w-min border p-2">{candidate.fromDate}</td>
        <td className="w-min border p-2">{candidate.toDate}</td>
        <td className="w-min border p-2">{candidate.email}</td>
        <td className="w-min border p-2">{candidate.uid}</td>
        <td className="w-min border p-2">
          <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded" onClick={handleView}>View File</button>
        </td>
        <td className="w-min border p-2">
          <button className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded">Download File</button>
        </td>
        <td className="w-min border p-2">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded">Send Mail</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



      </div>
    </div>

  )
}

export default page