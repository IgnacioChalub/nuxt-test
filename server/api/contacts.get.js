import { useContactsDb } from "~/composables/db"

const db = useContactsDb()
export default defineEventHandler(async (event) => {
  const contacts = await db.findAll()
  const data = {
    contactsCounter: contacts.length
  }
  return data
})
