import React from 'react'

function FAQs() {
  return (
    <>
    <div className=" xs:my-[60px] 
                      md:my-[60px] md:mx-[42px]
                      xl2:my-[80px] xl2:mx-[152px] 
                      xl3:my-[80px] xl3:mx-[297px]">
      <h2 className="text-[27px] font-bold text-center leading-[33px] text-primary  xs:px-[20px] md:px-[148px] ">
        Frequently asked questions
      </h2>
      <div className=" ">
        <div className="border rounded-[7px] xs:p-[20px] xs:m-[20px] bg-[#FAF8FF] text-[20px]">
          <div className="justify-between flex">
            <p className="font-semibold text-primary">
              Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            </p>
            <span className="text-primary font-bold">—</span>
          </div>
          <p className="mt-2 text-[#6F6C90] text-[18px] leading-[30px]">
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. 
            Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi 
            risus sagittis tortor integer.
          </p>
        </div>
        <div className="border rounded-[7px] p-4 bg-[#FAF8FF] xs:mx-[20px]">
          <div className="flex justify-between ">
            <p className="font-semibold text-black text-[20px] leading-[28px]">
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
            </p>
            <span className="text-black font-bold h-[14px] w-[14px] ">+</span>
          </div>
        </div>
        <div className="border rounded-[7px] p-4 bg-[#FAF8FF] xs:m-[20px]">
          <div className="flex justify-between">
            <p className=" text-black font-semibold leading-[28px] text-[20px]  ">
              Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
            </p>
            <span className="text-black font-semibold h-[14px] w-[14px]">+</span>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default FAQs