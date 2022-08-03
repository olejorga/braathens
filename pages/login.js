import Link from "next/link"
import Input from "../components/input"
import Layout from "../components/layout"

export default function Login() {
  return (
    <Layout>
      <section className="flex flex-col items-center gap-8 pt-8 pb-32">
        <h1 className="text-3xl text-center font-bold">Login</h1>
        <form className="flex flex-col items-center gap-4">
          <Input label="Email" placeholder="name@email.io" icon="mail" />
          <Input label="Password" placeholder="******" icon="lock" />
          <button className="button bg-black text-white">Login</button>
        </form>
        <p>
          <span>Don't have an account? </span>
          <Link href="">
            <a className="font-bold">Sign up here.</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}