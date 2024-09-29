const API_DATA_URL = process.env.NEXT_PUBLIC_API_DATA_URL;

const region = 'TWMS',
      version = 250;

export const GetEquip = () => {
  fetch(
    `${API_DATA_URL}/api/${region}/${version}/item/?&categoryFilter=Character&overallCategoryFilter=Equip&subCategoryFilter=Hair`
  ).then(error => console.log(error))
}