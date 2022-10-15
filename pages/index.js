import Head from "next/head";
import DatePicker from "../components/datePicker";

export default function Home() {
  return (
    <>
      <Head>
        <title> IOT-SNMS</title>
        <meta name="keyword" content="web development, programing" />
      </Head>
      <h1 className="text-center">IOT-SNMS</h1>
      <DatePicker />

      {/* <ReadCloudFirestor /> */}
    </>
  );
}
