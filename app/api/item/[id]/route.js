import dbConnect from "../../../lib/mongodb";
import item from "../../../models/item";

export async function GET(req,context){
  await dbConnect();

  try{
    const {params} = await context
    const {id} = await params
  const SingleItem = await item.findById(id)

    if (!SingleItem) {
          return  Response.json({ success: false }, { status: 404 });
        }
     return Response.json({ success: true, data: SingleItem }, { status: 200 });
  }catch{
   return Response.json({ success: false }, { status: 400 }); 
  }
}


export async function PUT(req,context){
  await dbConnect()
  
  try {
  const {id} = await context.params
  const body = await req.json()
         const updatedItem = await item.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );
        if (!updatedItem) {
          return  Response.json({ success: false }, { status: 400 });
        }
       return Response.json({ success: true, data: updatedItem }, { status: 200 });
      } catch (error) {
        return  Response.json({ success: false }, { status: 400 });
      }
}



export async function DELETE(req,context){
  
await dbConnect()
  const {params} = await context
 const {id} =  await params

       try {
        const deletedItem = await item.deleteOne({ _id: id });
        if (!deletedItem) {
        return   Response.json({ success: false }, { status: 400 });
        }
        return Response.json({ success: true, data: {} }, { status: 200 });
      } catch (error) { 
         return Response.json({ success: false }, { status: 400 });
      }
}