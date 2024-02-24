import React, {useState} from "react";
import axios from "axios";
import "../Style/Style.css";

export default function Contact() {

// const [message, setMessage]=useState({})

// const sendMail = () => {
//   axios.post("http://localhost:3000/api/contactMail",message)
//   .then((result)=>{

//     console.log(result,'message envoyé avec succès');

//   })
//   .catch(error=>{
//     console.log(error,"echec d'envoi de mail")
//    })
// }

// const handleInputChange = (key, value) => {
//     setMessage({
//         ...message,
//         [key]: value
//     });
// };

  return (
    <div className="container1">
      <h1>Contactez-nous</h1>
      <form>
        <label htmlFor="fname"></label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Votre nom"
        //   onChange={(e) =>
        //     handleInputChange(
        //         "contactName",
        //         e.target.value
        //     )
        // }
        />

        <label htmlFor="emailAddress"></label>
        <input
          id="emailAddress"
          type="email"
          name="email"
          placeholder="Votre email"
        //   onChange={(e) =>
        //     handleInputChange(
        //         "contactMail",
        //         e.target.value
        //     )
        // }
        />

        <label htmlFor="sujet"></label>
        <input 
          id="sujet" 
          type="text"
          name="sujet" 
          placeholder="Sujet:" 
        //   onChange={(e) =>
        //     handleInputChange(
        //        "subject",
        //         e.target.value
        //      )
        //  }
        />

        <label htmlFor="subject"></label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Votre message"
          rows={10}
        //   onChange={(e) =>
        //     handleInputChange(
        //         "message",
        //         e.target.value
        //     )
        // }
        ></textarea>

        <button 
          type="submit"
        //   onClick={()=>{sendMail()}}

          >
            Envoyer
          </button>
      </form>
    </div>
  );
}
