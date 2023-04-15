import React from "react";
import { useEffect,useState } from "react";
import "./Gallery.css";
import blur from "../../assets/images/gym_center/fit_woman_2.png"
import { motion } from "framer-motion";
import {LazyLoadImage} from "react-lazy-load-image-component";
import"react-lazy-load-image-component/src/effects/blur.css";


import { images } from "../../data/galleryData";
function Gallery() {
  useEffect(()=>{
    console.log(images[0].image)
  },[])
	return (
		<div>
			<section id="gallery">
				<motion.h2
        	initial={{translateY:50,opacity:0}}
          whileInView={{translateY:0,opacity:1}}
          transition={{duration:.5}}
        >
					OUR <span className="txt_stroke">GALLERY</span>
				</motion.h2>
				<motion.p 
        	initial={{translateY:50,opacity:0}}
          whileInView={{translateY:0,opacity:1}}
          transition={{duration:.5}}
        className="gallery_about">
					Have a look at some of our gym centers , students and why you should choose
					us.
				</motion.p>
        <div className="gallery_wrapper">
        {
          images.map((image,id)=>{
            return(
              <motion.div
              initial={{opacity:0,translateX:-50}}
						 animate={{opacity:1,translateX:0}}
						 transition={{duration:.5,delay:id*.5}}
               key={id} id="image_container" >
                 <LazyLoadImage 
                 className='img'
                 key={id}
                 effect="blur"
                 placeholderSrc={blur}
                 width="100%"
                 style={{display:"block"}}
                  src={image?.image} alt="" />
              </motion.div>
            )
          })
        }
        </div>
			</section>
		</div>
	);
}

export default Gallery;
