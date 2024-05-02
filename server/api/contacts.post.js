import { useContactsDb } from "~/composables/db"

const db = useContactsDb()
export default defineEventHandler(async (e)=>{
  try {
      const body = await readBody(e)
      const contact = JSON.parse(body)
      await db.create(contact)
      const contacts = await db.findAll()
      const data = {
        contactsCounter: contacts.length
      }
      return data
  }catch (e) {
      setResponseStatus(e,500)
  }
})