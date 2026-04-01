import item from "../../models/item";
import dbConnect from "../../lib/mongodb";
import cloudinary from "../../lib/cloudinary";
 

 

export async function GET(){
  await dbConnect()
try {
  
        const items = await item.find({});
       return Response.json({ success: true, data: items });
  } catch (error) {
     console.log(error)
    return Response.json({ success: false }, { status: 400 });
   
  }
}

export async function POST(req){

  await dbConnect();

      try {

       const formData = await req.formData()
         const name = formData.get('name');
    const description = formData.get('description');
    const image = formData.get('image')
    const quantity = formData.get('quantity')
  if (!image || image.size === 0) {
      return Response.json({ success: false, message: "No image" }, { status: 400 });
    }


     const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: 'shop-items' }, // optional folder
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(buffer);
    });
        console.log(name, description);  
        const newItem = await item.create({
          name,
          description,
          image:uploadResult.secure_url,
          quantity
        })
        return Response.json({ success: true, data: newItem }, { status: 201 });
      } catch (error) {
       console.log(error)
    return Response.json({ success: false }, { status: 400 });
      }

    }