import Welcome from "@/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend("re_Y4MMq6NF_6AJd7YrvgfhSqzS85bLXDzeD");

export async function POST() {
  await resend.emails.send({
    from: "you@example.com",
    to: "user@gmail.com",
    subject: "hello world",
    react: Welcome(),
  });
}
