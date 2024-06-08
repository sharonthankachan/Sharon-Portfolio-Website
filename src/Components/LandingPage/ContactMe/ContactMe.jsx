import React, { useRef, useState } from "react";
import { Input, Textarea, Typography } from "@material-tailwind/react";
import { FiSend } from "react-icons/fi";
import ContactCard from "./ContactCard";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { Spinner } from "@material-tailwind/react";

const ContactMe = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          setOpen(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const SlideTransition = (props) => {
    return <Slide {...props} direction="left" />;
  };

  return (
    <section id={id} className="pt-6 overflow-hidden">
      <div className="px-8 py-8 lg:py-16 flex justify-center">
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          TransitionComponent={SlideTransition}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            I got your message. Thank You!
          </Alert>
        </Snackbar>
        <div className="container text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 md:text-xl text-neutralGrey lg:text-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 text-3xl text-greenPrimary lg:text-5xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Contact Me
          </Typography>
          <div className="mt-20 gap-y-6 md:flex justify-center lg:gap-24 md:gap-12">
            <div className="flex justify-center mb-8">
              <div className="space-y-3 flex flex-col">
                <div
                  className="contact-card"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <p className="text-lg font-semibold text-neutralDGrey mb-3">
                    Talk to me
                  </p>

                  <ContactCard
                    appName="Email"
                    contactThrough="sharonthankachan171@gmail.com"
                    icon={<MdOutlineEmail />}
                    toLink="mailto: sharonthankachan171@gmail.com"
                  />
                </div>
                <div
                  className="contact-card"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <ContactCard
                    appName="WhatsApp"
                    contactThrough="8590248663"
                    toLink="https://wa.me/+918590248663"
                    icon={<FaWhatsapp />}
                  />
                </div>
                <div
                  className="contact-card"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  <ContactCard
                    appName="Instagram"
                    contactThrough="Sharon Thankachan"
                    toLink="https://ig.me/m/_s_h_a_r_o_n_____"
                    icon={<FaInstagram />}
                  />
                </div>
              </div>
            </div>
            <form
              action="#"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="flex justify-center w-full max-w-md"
              ref={form}
              onSubmit={sendEmail}
            >
              <div>
                <p className="mb-3 text-center max-w-96 min-w-80 text-lg font-semibold text-neutralDGrey">
                  Write me a message
                </p>
                <div className="flex flex-col gap-4 w-full">
                  <div>
                    <Input
                      color="gray"
                      size="lg"
                      required
                      label="Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="user_name"
                      className="focus:border-t-gray-900 border-1 tracking-wider"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                    />
                  </div>

                  <div>
                    <Input
                      color="gray"
                      size="lg"
                      required
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      label="Your Email"
                      name="user_email"
                      className="focus:border-t-gray-900 tracking-wider"
                      containerProps={{
                        className: "!min-w-full ",
                      }}
                    />
                  </div>
                  <div>
                    <Textarea
                      rows={6}
                      required
                      color="gray"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      label="Your Message"
                      name="message"
                      className="focus:border-t-gray-900 tracking-wider"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3 flex hover:cursor-pointer w-full justify-center items-center py-3 md:text-sm text-sm bg-greenPrimary hover:bg-green-400 border transition duration-150 text-white rounded-lg"
                  >
                    {loading ? "Sending" : "Send Message"}
                    {loading ? (
                      <Spinner className="h-4 w-4 ml-4" color="white" />
                    ) : (
                      <FiSend className="ml-4" />
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
