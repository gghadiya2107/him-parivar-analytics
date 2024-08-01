import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layout/MainLayout";
import Dashboard from "./dashboard";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Home() {
  const route = useRouter()
  useEffect(() => {
    
    route.push("/dashboard")
  }, []);
  return (
    <>
          <MainLayout>

          </MainLayout>


    </>
  );
}
