import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c4dfed3f07844a098d");

const db = new Databases(client);

export async function newContact(data) {
  console.log("Reaching");
  try {
    if (!data.name) throw { status: 404, message: "Need a Name to proceed" };
    if (!data.email) throw { status: 404, message: "Need an Email to proceed" };
    if (!data.phone)
      throw { status: 404, message: "Need Phone Number to proceed" };

    const { $id } = await db.createDocument("contact", "people", ID.unique(), {
      name: data.name,
      whatsapp: data.whatsapp,
      cname: data.cname,
      gst: data.gst,
      email: data.email,
      phone: data.phone,
      message: data.message,
      services: data.services,
      service: data.service,
    });

    if (!$id) throw { message: "Not Uploaded" };

    return { status: true, message: "Uploaded Successfully" };
  } catch (error) {
    console.log(error);
    return { status: false, message: error.message || "Something went wrong" };
  }
}
