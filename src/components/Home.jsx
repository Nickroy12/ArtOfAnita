
import { MasonryPhotoGallery } from "../../Gellary"
import { CategoryTabs } from "./productGlance"


import { Slider } from "./Slider"

export const Home =()=>{
    return (
        <>
          <Slider/>
           <CategoryTabs/>
        <MasonryPhotoGallery/>
        </>
    )
}