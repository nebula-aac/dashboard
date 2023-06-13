import usePageTitle from "@/core/hooks/usePageTitle";
import Head from "next/head";
import { Fragment } from "react";

export default function Extensions() {
    const pageTitle = usePageTitle()

    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            {/* Rest of your page content */}
        </Fragment>
    )
}