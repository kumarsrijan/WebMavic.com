import React, { useState } from "react";
import { newContact } from "@/utils/appwrite";
import { useRouter } from "next/navigation";

const Form = () => {
  const [data, setData] = useState({
    name: null,
    whatsapp: null,
    cname: null,
    gst: null,
    email: null,
    phone: null,
    message: null,
    services: [],
    service: null,
  });
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const contactHandler = async (e) => {
    e.preventDefault();
    setDisable(true);
    const { status, message } = await newContact(data);
    alert(message);
    if (status) router.refresh();
    setDisable(false);
  };

  const onClickHandler = (e) =>{
    console.log(e.currentTarget.value);
  }

  
  return (
    <div className="col-lg-6">
      <div className="contact-form-wrap">
        <div className="form-tltle">
          <h5>Make a Free Consulting</h5>
        </div>
        <div className="contact-form">
          <form onSubmit={contactHandler}>
            <div className="row">
              <div className="col-md-6 mb-20">
                <div className="form-inner">
                  <label> name :</label>
                  <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-20">
                <div className="form-inner">
                  <label>WhatsApp Number:</label>
                  <input
                    value={data.whatsapp}
                    onChange={(e) =>
                      setData({ ...data, whatsapp: e.target.value })
                    }
                    type="number"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="form-inner">
                  <label>Company Name :</label>
                  <input
                    value={data.cname}
                    onChange={(e) =>
                      setData({ ...data, cname: e.target.value })
                    }
                    type="text"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="form-inner">
                  <label>Is your company GST registered?</label>

                  <div className="radio-container">
                    
                    <input
                      className="radio "
                      name="gst-check"
                      type="radio"
                      value="Yes"
                      onClick={(e) => setData({ ...data, gst: true })}
                      id="gst-yes"
                      style={{ display: "none" }}
                    />
                    <label
                      className="col-md-6 mb-20"
                      htmlFor="gst-yes"
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      Yes
                    </label>
                    <input
                      className="radio"
                      name="gst-check"
                      type="radio"
                      value="No"
                      onClick={(e) => setData({ ...data, gst: false })}
                      id="gst-no"
                      style={{ display: "none" }}
                    />
                    <label
                      className="col-md-6 mb-20"
                      htmlFor="gst-no"
                      style={{
                        textAlign: `center`,
                      }}
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 mb-20">
                <div className="form-inner">
                  <label>Email</label>
                  <input
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    type="email"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="form-inner">
                  <label>Phone</label>
                  <input
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    type="number"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-20">
                <div className="form-inner">
                  <label>Services You Need ?</label>
                  {/* <select onChange={e => setData({ ...data, services: e.target.value })}>
                  <option value="" disabled selected>Select your option</option>
                  <option value={"Web design"}>Web Design</option>
                  <option value={"Web Development"}>Web Development</option>
                  <option value={"App development"}>App Development</option>
                  <option value={"Graphic design"}>Graphic Design</option>
                  <option value={"Copywritting"}>Copy Writting</option>
                  <option value={"SEO"}>SEO</option>
                  <option value={"Other"}>Other</option>
                </select> */}
                  <ul className="checkboxes ">
                    <li className="checkbox ">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-0" 
                        name="choice"
                        type="checkbox" 
                        value="Web Design"
                      />
                      <label className="checkbox-label" htmlFor="choice-0">
                      Web Design
                      </label>
                    </li>
                    <li className="checkbox">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-1" 
                        name="choice"
                        type="checkbox"
                        value="Web Development"
                      />
                      <label className="checkbox-label" htmlFor="choice-1">
                      Web Development
                      </label>
                    </li>
                    <li className="checkbox">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-2" 
                        name="choice"
                        type="checkbox"
                        value="Graphic Design"
                      />
                      <label className="checkbox-label" htmlFor="choice-2">
                      Graphic Design
                      </label>
                    </li>
                    <li className="checkbox">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-3"
                        name="choice"
                        type="checkbox"
                        value="App Development"
                      />
                      <label className="checkbox-label" htmlFor="choice-3">
                      App Development
                      </label>
                    </li>
                    <li className="checkbox">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-4" 
                        name="choice"
                        type="checkbox"
                        value="Copy Writting"
                      />
                      <label className="checkbox-label" htmlFor="choice-4">
                      Copy Writting
                      </label>
                    </li>
                    <li className="checkbox">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-5" 
                        name="choice"
                        type="checkbox"
                        value="SEO"
                      />
                      <label className="checkbox-label" htmlFor="choice-5">
                      SEO
                      </label>
                    </li>
                    <li className="checkbox">
                      <input
                        className="checkbox-input" onClick={onClickHandler}
                        id="choice-6" 
                        name="choice"
                        type="checkbox"
                        value="Other"
                      />
                      <label className="checkbox-label" htmlFor="choice-6">
                      Other
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {data.services === "Other" && (
                <div className="col-lg-12 mb-20">
                  <div className="form-inner">
                    <label>Other Service Like</label>
                    <input
                      value={data.service}
                      onChange={(e) =>
                        setData({ ...data, service: e.target.value })
                      }
                      type="text"
                    />
                  </div>
                </div>
              )}
              <div className="col-lg-12 mb-20">
                <div className="form-inner">
                  <label>Message</label>
                  <textarea
                    value={data.message}
                    onChange={(e) =>
                      setData({ ...data, message: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-inner">
                  <button
                    disabled={disable}
                    className="primary-btn3"
                    type="submit"
                  >
                    {disable ? "Loading..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
