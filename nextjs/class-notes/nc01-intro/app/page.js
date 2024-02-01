//? app folder içindeki page.js "/" route olan home sayfasıdır

import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

//? nextjs'de tüm componentler default olarak server componenttir. client component kullanmak için "use-client" direktifini kullanmamız gerekir

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center">Home</h1>
      {/* //* nested olarak client component içinde server component kullanmak istiyorsak children yapısını kullanmalıyız */}
      {/* <ServerComponent /> */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
