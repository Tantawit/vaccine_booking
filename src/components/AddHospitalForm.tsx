import { revalidatePath } from "next/cache";

import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";

export default async function AddHospitalForm() {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";

    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");

    try {
      await dbConnect();

      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidatePath("/hospital");
  };

  return (
    <form
      action={addHospital}
      className="bg-gray-300 px-5 py-5 rounded mx-5 my-20 w-[60%]"
    >
      <div className="text-xl font-medium py-2">Add Hospital</div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">
          Name
        </label>

        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="Hospital Name"
          className="bg-white border-2 border-gray-200 rounded w-full p-2 focus:outline-none focus:border-blue-200"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">
          Address
        </label>

        <input
          type="text"
          required
          id="address"
          name="address"
          placeholder="Address"
          className="bg-white border-2 border-gray-200 rounded w-full p-2 focus:outline-none focus:border-blue-200"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="district">
          District
        </label>

        <input
          type="text"
          required
          id="district"
          name="district"
          placeholder="District"
          className="bg-white border-2 border-gray-200 rounded w-auto p-2 focus:outline-none focus:border-blue-200"
        />

        <label
          className="w-auto block text-gray-700 pr-4 ml-5"
          htmlFor="province"
        >
          Province
        </label>

        <input
          type="text"
          required
          id="province"
          name="province"
          placeholder="Province"
          className="bg-white border-2 border-gray-200 rounded w-auto p-2 focus:outline-none focus:border-blue-200"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="postalcode">
          Postal Code
        </label>

        <input
          type="text"
          required
          id="postalcode"
          name="postalcode"
          placeholder="Postal Code"
          className="bg-white border-2 border-gray-200 rounded w-auto p-2 focus:outline-none focus:border-blue-200"
        />

        <label className="w-auto block text-gray-700 pr-4 ml-5" htmlFor="tel">
          Tel
        </label>

        <input
          type="text"
          required
          id="tel"
          name="tel"
          placeholder="Telephone Number"
          className="bg-white border-2 border-gray-200 rounded w-auto p-2 focus:outline-none focus:border-blue-200"
        />
      </div>

      <div className="flex items-center w-1/2 my-2">
        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
          Picture
        </label>

        <input
          type="text"
          required
          id="picture"
          name="picture"
          placeholder="URL"
          className="bg-white border-2 border-gray-200 rounded w-full p-2 focus:outline-none focus:border-blue-200"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-teal-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-teal-300 

            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Hospital
      </button>
    </form>
  );
}
