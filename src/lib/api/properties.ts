import { propertiesReturn } from "@/mock/propertiesReturn";

export const fetchProperties = async () => {
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/1dc4a564-c59c-4e3e-9f26-3d231f1cfea6"
    );
    if (!res.ok) throw new Error("Erro ao buscar imóveis");
    return await res.json();
  } catch (err) {
    console.log("err", err);
    return propertiesReturn;
  }
};
