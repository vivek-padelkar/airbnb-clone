import mongoose from 'mongoose'

export async function connedctDb() {
  try {
    const MONGO_URI = process.env.MONGO_URI
    await mongoose.connect(MONGO_URI)
    console.log('MONGO DB CONNECTED SUCCESSFULLY')
  } catch (error) {
    console.log(error)
    console.log('ERROR WHILE CONNECTION TO MONGO DB')
    process.exit(1)
  }
}
