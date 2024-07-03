import React, { useEffect } from 'react'
// our services
import CategoryService from '../services/CategoryService';

function CategoryComponent() {

    const [getAllCategory, setAllCategory] = useState([]);

  useEffect(() => {
    CategoryService.getAllCategory()
    .then((res) => {
        setAllCategory(res.data)
        setIsLoading(true);
    })
    .catch((err) => console.log(err))
  }, [])  


  return (
    <div className= ' bg-lightGray h-[70px] flex items-center'>
      <div className='container mx-auto flex items-center gap-[20px]'>
       <button className='bg-mainBlue px-[20px] py-[10px] text-textWhite rounded-lg'>Show Category</button>

       {isloading ? <div>Category</div> : <div>Loading Category</div>}
      </div>
    </div>
  )
}

export default CategoryComponent;
