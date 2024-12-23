"use client";

import CustomSelect from "@/app/components/Customs/CustomSelectR";
import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from 'react';
import { toast, Toaster } from "sonner";
import * as yup from "yup";
import CustomCheckBox from "../../CustomInput";




// interface researc_list{
//   id:	number
//   research_id:	number
//   name: string	 
//   dateOfappointed: string
//   deliveryDate: string	
//   minimumNumberOfGroup: number
//   maximumNumberOfGroup: number
//   discussion: number
//   }

interface researc_list{
  research_comment: string
  research_dateOfappointed: string
  research_deliveryDate: string
  research_discussion: number
  research_id: number
  research_idcf: number
  research_iduf: number
  research_maximumNumberOfGroup: number
  research_minimumNumberOfGroup: number
  research_name: string
  status: string
  }
  
interface GetStatus{
  id: number
  status: number
  }
//   export function generateStaticParams() {
//     return [{ id: '1' }, { id: '2' }, { id: '3' }]
//   }
const Fetch = ( id ) => {
//   const { id } = await params
  const [resqst, setPhotos] = useState([]);
  const [status, setGetStatus] = useState([]);
  const [error, setError] = useState();
  const [empathy, setEmpathy] = useState("");
  const [check, setChek] = useState(false);
  const handleClick = () => setChek(!check)
  const [tokenstatus, setToken] = useState<Number>();
  const [isDisabled, setIsDisabled] = useState(false);
  const url = "https://secend-pr.shuttleapp.rs/todos";

  // const [check2, setChek2] = useState(false);
  // const handleClick2 = () => setChek2(!check2)
  const [req_states, getStates] = useState<Number>();
  const onSubmit = async (values: any, actions: any) => {

    let auth = localStorage.getItem("Authorization")
    if (auth != null){
  
    const reqponse = await fetch(`${url}/add-status-research`,{
      method: "POST",
      body: JSON.stringify({
        // "type_of_element": Object.keys(params)[0],
        // "status_idcf": parseInt(params.research),
        "status_idcf": parseInt(id.research),
        "status_idrf": parseInt(values.couseType),
        // "status_iduf": parseInt(values.couseType),
        "status_status": values.statusType
      }),
      
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': auth
      }
    
     
    })  .then((res) => {
     
      // return res.json();
      return res.status;
    })
    .then((data) => {
      // console.log(data);
    //   toast("Hello Geeks 4", {
    //     position: toast.POSITION.BOTTOM_LEFT,
    // });
    // toast.play({ id: "123" });
      if(data == 200){
        // corse_lest[parseInt(values.couseType)].status = '1';
        // corse_lest[parseInt(values.couseType)].research_name = 'لاشي';
        // console.log(parseInt(values.couseType))
        // console.log(values.couseType)
        toast.success("تمت اضافتة ");
  
      }
      else if(data == 400){
        toast.error("Error 400");
      }
      else if(data == 500){
        toast.error("Error 500");
      }
      else if(data == 401){
        toast.error("يجب تسجيل الدخول اولا");
      }
      else{
        toast.error("can't Create.");
      }
      return data
     
    }).catch((error) => {
      console.log(error)
    });
  }else{
    toast.error("يجب تسجيل الدخول اولا");
  }
    // await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // actions.resetForm();
  
    
  };
  const DeleteData = async (localid: any, arrayid: any) => {
    // if (auth != null){
      // onClick={() => {setIsDisabled(true);setTimeout(() => {localStorage.removeItem("departmentStatus"); localStorage.removeItem("Authorization");window.location.reload(); setIsDisabled(false);},2000); }} disabled={isDisabled}>logout</button>

    let auth = localStorage.getItem("Authorization")
    setIsDisabled(true)
    if (auth != null){
      if(confirm("هل انت متأكد من حذف العنصر")){
// console.log("OK")
        await fetch(`${url}/deleteResearch`,{
          // method: "DELETE",
          method: "POST",
          body: JSON.stringify({
            "id": parseInt(localid)
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Authorization': auth
          }
        })
          .then((res) => {
            getStates(res.status);
            return res.json();
          })
          .then((data) => {
            console.log(data.message);
            
            if(data.message == "Couldn't delete the element."){
              // setEmpathy("empathy");
              toast.error("من اضاف العنصر يستطيع حذفه.");
            }
            else if( data.message == "Deleted the element."){
              corse_lest.splice(arrayid, 1);
              toast.success("تم حذف العنصر");
              
            }
            return data
          }).catch((error) => {
            // setError(error);
            console.log(error)
          });
      }else{

        // console.log("NO")
      }
      

         
        
        // alert(id.target.value)
        // console.log(id.target.value)
      }
      setIsDisabled(false)
    }
  const UpdateData = async (localid: any, arrayid: any) => {
    // if (auth != null){
      // onClick={() => {setIsDisabled(true);setTimeout(() => {localStorage.removeItem("departmentStatus"); localStorage.removeItem("Authorization");window.location.reload(); setIsDisabled(false);},2000); }} disabled={isDisabled}>logout</button>

    // let auth = localStorage.getItem("Authorization")
    // setIsDisabled(true)
    // if (auth != null){
    //   if(confirm("هل انت متأكد من حذف العنصر")){
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    // console.log("message")
    // // console.log(id.target.value)
    // // console.log(id.target.id.target['data-id'])
    // corse_lest.splice(arrayid, 1);
    // console.log(localid)
    // // console.log(id2)

    toast.error("في الاصدار القادم");
    // console.log(arrayid)

// console.log("OK")
        // await fetch(`http://192.168.0.102:8070/deleteResearch`,{
        //   // method: "DELETE",
        //   method: "POST",
        //   body: JSON.stringify({
        //     "id": parseInt(id.target.value)
        //   }),
        //   headers: {
        //     "Content-type": "application/json; charset=UTF-8",
        //     'Authorization': auth
        //   }
        // })
        //   .then((res) => {
        //     getStates(res.status);
        //     return res.json();
        //   })
        //   .then((data) => {
        //     console.log(data.message);
            
        //     if(data.message == "Couldn't delete the element."){
        //       // setEmpathy("empathy");
        //       toast.error("من اضاف العنصر يستطيع حذفه.");
        //     }
        //     else if( data.message == "Deleted the element."){
        //       toast.success("تم حذف العنصر");
              
        //     }
        //     return data
        //   }).catch((error) => {
        //     // setError(error);
        //     console.log(error)
      //   //   });
      // }
      // // else{

      // // }
      // }
      // setIsDisabled(false)
    }
  
  useEffect(() => {

  
  const fetchData = async () => {
  let auth = localStorage.getItem("Authorization");
  toast.error("Error 400");
    if (auth != null){
      toast.error("Error 400");
        // fetch(`${url}/researchingAu/${params.research}`,{
        fetch(`${url}/researchingAu/${id.research}`,{
          method: "GET",
        
          headers: {
            'Content-type': 'application/json',
            'Authorization': auth
           
          },
        })
          .then((res) => {
            getStates(res.status);
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            
            if(data == "empathy"){
              // console.log("3")
              setEmpathy("empathy");
            }else{
              setPhotos(data);
            }
          }).catch((error) => {
            setError(error);
            console.log(error)
         });
    }
  }
const getStatus = async () => {
  let auth = localStorage.getItem("Authorization");

  // toast.error("Error 400");
    if (auth != null){
      // toast.error("Error 400");
        fetch(`${url}/research-get-status`,{
          method: "POST",
          body: JSON.stringify({
            // "courseid": parseInt(params.research),
            "courseid": parseInt(id.research),
          }),
        
          headers: {
            'Content-type': 'application/json',
            'Authorization': auth
           
          },
        })
          .then((res) => {
            getStates(res.status);
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            
            if(data == "empathy"){
              // console.log("2")
              // setEmpathy("empathy");
            }else{
              setGetStatus(data);
            }
          }).catch((error) => {
            setError(error);
            console.log(error)
         });
    }
  }
  
const fetchDataNormel = async () => {
  let auth = localStorage.getItem("Authorization");

// if (auth != null){
    // fetch(`${url}/researching/${params.research}`,{
    fetch(`${url}/researching/${id.research}`,{
      method: "GET",
    })
      .then((res) => {
        getStates(res.status);
        return res.json();
      })
      .then((data) => {
        if(data == "empathy"){
          setEmpathy("empathy");
        }else{
          setPhotos(data);
        }
      }).catch((error) => {
        setError(error);
        console.log(error)
      });
    // }
  }
  let auth = localStorage.getItem("Authorization");


if(auth != null){
  const fatching = async () => {
  const reqponse = await fetch(`${url}/user/decode-token`,{
    method: "POST",
    body: JSON.stringify({
      "token": auth
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then((res) => {
    // setToken(res.status);
    
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    // let st = await data;
    // setTokenStatus(data);
    setToken(data);
    return data
  }).catch((error) => {
    console.log(error)
  });
  // console.log(await reqponse);
  let ts = await reqponse;
  if(ts == 200){
    fetchData();
    getStatus();
  }else{

    fetchDataNormel()
  }
  }
  fatching();
}else{

  fetchDataNormel()
}
        
}, [id]);
  const corse_lest: researc_list[] = resqst;
  const get_status: GetStatus[] = status;
  let fLen = get_status.length;
  let cLen = corse_lest.length;
  for (let j = 0; j < cLen; j++) {
    for (let i = 0; i < fLen; i++) {
    if(get_status[i].id == corse_lest[j].research_id){
      if(get_status[i].status != 0){
        corse_lest[j].status = "1"

      }

    }}
  }
      const t  = true;
      // console.log(empathy);

  if( req_states == 401){
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>Error 401</h1>
          </main>
          </div>
    );
  } else if (req_states == 404){
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <h1>Error 404</h1>
          </main>
          </div>
    );

  }else{


if(empathy != "empathy"){

  const isNull = !corse_lest.filter(Boolean).length

  if (isNull){
    if(error){
      return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
          <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1 >server error</h1>
         {/* <h1 >{error}</h1> */}
           </main>
        </div>
      )
    }else{
      return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
          <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
         <h1>تحميل...</h1>
           </main>
        </div>
      )

    }
  }else{
    const advancedSchema = yup.object().shape({
      couseType: yup.string().oneOf(corse_lest.map(op => (op.research_id.toString() )),"String").required("Required"),
      statusType: yup.string().oneOf(["0", "1"],"String").required("Required"),
  });
    // console.log(check);

    return(
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
        {/* <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start md:text-sm md:text-base text-xs w-1/2"> */}
        <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start md:text-lg text-xs md:w-1/2 md:text-center">

        <div className="w-full  rounded-md h-22  shadow-2xl text-center grid content-center">
        <Formik initialValues={{couseType:"", statusType:"",
      // acceptedTos: false 
      }} validationSchema={advancedSchema} onSubmit={onSubmit}>
        {({isSubmitting}) => (
          <Form className="md md:text-lg text-xs w-full">
            
            <CustomSelect
              // label="اختر المادة"
              label=""
              name="couseType"
              paceholder="Please select a corse">
             
              <option value={""}>اختر المادة</option>
              {corse_lest.map(option => (
                <option value={option.research_id} key={option.research_id}>{option.research_name}</option>
              ))}

            </CustomSelect>
            
            <CustomSelect
              // label="اختر المادة"
              label=""
              name="statusType"
              paceholder="Please select a corse">
             
              <option value={""}>اختر الحالة</option>
              {/* {corse_lest.map(option => ( */}
                <option value="1">منتهي</option>
                <option value="0">غير منتهي</option>
              {/* // ))} */}

            </CustomSelect>
            {/* <label>"label"</label>
            <select 
              label=""
              name="statusType"
              paceholder="Please select a corse"
              className={meta.touched && meta.error ? "input-error" : ""}
              /> */}

            <button className="button inline" disabled={isSubmitting} type="submit">ادخل</button>
            <Toaster richColors/>
            </Form>
            )}
          </Formik>
        </div>
        <div className="w-full  rounded-md h-14 border shadow-2xl text-center flex flex-row justify-right items-center">
          {/* <input type="checkbox" id="myCheck" className="checkbox" onChange={e => setChek(e.target.value)}/> */}
          {/* https://stackoverflow.com/questions/56356900/way-to-determine-checkbox-checked-in-react-usestate */}
          <input type="checkbox" id="myCheck" className="checkbox my-auto text-center  mr-4" onClick={handleClick} checked={check} onChange={e => {}}/>
          <label className="text-center mx-auto mr-3" htmlFor="myCheck">اخفاء الابحاث المنتهية</label>
          {/* <input type="checkbox" id="myCheck2" className="checkbox my-auto text-center  mr-4" onClick={handleClick2} checked={check2}/>
          <label className="text-center mx-auto mr-3" htmlFor="myCheck2">ترتيب</label> */}
          </div>
          {/* {corse_lest.filter((item) =>{ */}
          {corse_lest.filter(
            
            (d) => {if(check == true){ return new Date(d.research_deliveryDate).valueOf() - new Date().valueOf() > 0}
          else{
            return d
          }
          }
          ) .map((post, index) => {
          return (
          // <div className="layer border rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 px-9 py-8 w-full text-center" key={post.research_id}>
          <div className="layer relative flax flax-row rounded-md shadow-xl w-full " key={post.research_id}>

          
          <div className="layer border border-b-0 relative flax flax-row rounded-t-md px-9 w-full " >
            <span className="text-right"><h1>#{index + 1}</h1></span>
            {!post.status ? "": <h1 className="float-left bg-green-800 inline w-4 h-4 md:w-5 md:h-5 absolute left-4 top-4 rounded-full text-center">&#10003;</h1>}

            <span className="basis-1/4"><h2>اسم البحث :         <div className="underline font-semibold decoration-solid inline">{post.research_name.toString()}</div></h2></span>  
            
            <span className="basis-1/4"><h2>تاريخ التحديد :     {post.research_dateOfappointed}</h2></span>  
            <span className="basis-1/4"><h2>تاريخ التسليم  :    {post.research_deliveryDate}</h2></span>  
            <span className="basis-1/4"><h2>اقل عدد للمجموعة :  {post.research_minimumNumberOfGroup}</h2></span>  
            <span className="basis-1/4"><h2>اكبر عدد للمجموعة : {post.research_maximumNumberOfGroup}</h2></span>  
            <span className="basis-1/4"><h2>تعليق : {post.research_comment}</h2></span>  

          </div>
          <div className="grid grid-rows-2 grid-flow-col rounded-b-md border border-t-0 ">
            <button 
            className='rounded-br-md bg-stone-400 inline row-span-3 box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-sm justify-center leading-[1em]  px-[12px] py-[10px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-base' 
            value={post.research_id}  onClick={() => UpdateData(post.research_id, index)} data-id={index} disabled={isDisabled}>update</button>
            <button 
            className='rounded-bl-md bg-red-500 inline row-span-3 box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-sm justify-center leading-[1em]  px-[12px] py-[10px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] md:text-base' 
            value={post.research_id} onClick={() => DeleteData(post.research_id, index)} data-id={index} disabled={isDisabled}>deleate</button>
          </div> 
          </div>
            )
          })}

         </main>
      </div>
    )
  }
}else{
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-slate-100 text-base">
      <main className=" flex flex-col gap-8 row-start-2 items-center sm:items-start">
     {/* <h1 >لا يوجد عناصر</h1> */}
    <Link href="/adding"><button className='rounded-[8px] border shadow-lg shadow-[#000000] box-border text-[#FFFFFF] flex font-[Phantomsans,_sans-serif] text-[20px] justify-center leading-[1em] max-w-full min-w-[140px] px-[24px] py-[19px] no-underline select-none whitespace-nowrap cursor-pointer hover:outline-[0] ' onClick={() => {localStorage.setItem("department","3");localStorage.setItem("departmentStatus","true");window.location.reload() }}>اضافة عنصر +</button></Link>
     {/* <h1 >{error}</h1> */}
       </main>
    </div>
  )
}

}
  
    }
  export default Fetch;

