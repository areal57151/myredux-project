import Filter from "./Filter";
const AllCategories = () =>{
    return(<div>
       <h1>ВЫБЕРИТЕ СВОЮ ПОКУПКУ </h1>
       
       {['ПЛАТКИ', 'КИМОНО', 'БЛУЗЫ', 'СУМКИ-ШОППЕРЫ', 'ВЕСЬ АССОРТИМЕНТ'].map(category => <Filter category={category}/>)}

        </div> )
}
export default AllCategories;