import React from "react";
import Agent1 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent1.png";
import Agent2 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent2.png";
import Agent3 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent3.png";
import Agent4 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent4.png";
import Agent5 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent5.png";
import Agent6 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent6.png";
import Agent7 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent7.png";
import Agent8 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent8.png";
import Agent9 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent9.png";
import Agent10 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent10.png";
import Agent11 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent11.png";
import Agent12 from "C:/Users/SANTHOSH/React/authentrealestate/src/assets/images/agent12.png";

const agentDetails = [
  {
    image: Agent1,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "abc@gmail.com",
  },
  {
    image: Agent2,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "edf@gmail.com",
  },
  {
    image: Agent3,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "ghi@gmail.com",
  },
  {
    image: Agent4,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "jkl@gmail.com",
  },
  {
    image: Agent5,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "mno@gmail.com",
  },

  {
    image: Agent6,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "stu@gmail.com",
  },
  {
    image: Agent7,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "vwx@gmail.com",
  },
  {
    image: Agent8,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "yza@gmail.com",
  },
  {
    image: Agent9,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "bcd@gmail.com",
  },

  {
    image: Agent10,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "hij@gmail.com",
  },
  {
    image: Agent11,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "klm@gmail.com",
  },
  {
    image: Agent12,

    name: "Patricia Tullert",
    phone: "0123 456 78910",
    Email: "nop@gmail.com",
  },
];
const Contact = () => {
  return (
    <div className="contaier mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {agentDetails.map((agent, index) => (
          <div
            className=" flex rounded-lg overflow-hidden border border-gray-300 shadow-md p-4 justify-between h-[250px]"
            key={index}
          >
            <img
              className="rounded-full p-1 border border-gray-300 ml-5 mb-4 custom-image-size"
              style={{ width: "150px", height: "150px" }}
              src={agent.image}
              alt=""
            />
            <div className="flex-row">
              <p className=" text-lg font font-semibold mb-2 text-violet-700">
                {agent.name}
              </p>
              <p className="text-gray-600 mb-2 mt-6">{agent.phone}</p>
              <p className="text-gray-600 mb-2">{agent.Email}</p>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
