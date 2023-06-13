import Dashboard from "@/core/components/dashboard/Dashbaord";
import usePageTitle from "@/core/hooks/usePageTitle";
import Head from "next/head";
import { Fragment } from "react";

export default function Settings() {
  const pageTitle = usePageTitle()

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Dashboard />
    </Fragment>
  )
}