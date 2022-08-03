import Link from "next/link";
import Input from "../components/input";
import Layout from "../components/layout";

export default function Reset() {
  return (
    <Layout>
      <section className="flex flex-col items-center gap-8 pt-8 pb-32">
        <h1 className="text-3xl text-center font-bold">Reset password</h1>
        <form className="flex flex-col items-center gap-4">
          <Input label="Email" placeholder="name@email.io" icon="mail" />
          <button className="button bg-black text-white">Reset</button>
        </form>
        <p>
          <span>Remeber your password? </span>
          <Link href="">
            <a className="font-bold">Login here.</a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}