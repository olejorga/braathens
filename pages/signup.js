import Link from "next/link"
import Input from "../components/input"
import Layout from "../components/layout"

export default function Signup() {
  return (
    <Layout>
      <section className="flex flex-col items-center gap-8 pt-8 pb-32">
        <h1 className="text-3xl text-center font-bold">Sign up</h1>
        <form className="flex flex-col items-center gap-4">
          <h2 className="font-bold">Personal information</h2>
          <Input label="Name" placeholder="John Travolta" icon="person" />
          <Input label="Email" placeholder="name@email.io" icon="mail" />
          <h2 className="font-bold">Create a password</h2>
          <Input label="Password" placeholder="********" icon="lock" type="password" />
          <Input label="Confirm password" placeholder="********" icon="lock" type="password" />
          
          <button className="button bg-black text-white">Sign up</button>
        </form>
        <p>
          <span>Already have an account? </span>
          <Link href="">
            <a className="font-bold">Login here.</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}