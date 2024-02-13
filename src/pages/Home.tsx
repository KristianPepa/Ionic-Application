// React Imports
import React, { useEffect, useState } from "react";

// Third Party Librarys
import { cart, home, reorderThreeOutline } from "ionicons/icons";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import useEmblaCarousel from "embla-carousel-react";

// Additional Imports
import "swiper/css";
import "./Home.css";

interface ProductDetails {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    // startIndex: products.length / 2,
  });
  const [showDescriptionById, setShowDescriptionById] = useState<number>();

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.log("Error getting products in home page ", error);
      }
    };

    fetchData();
  }, []);

  const textFormater = (props: string) => {
    return props.slice(0, 30) + "...";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonIcon
            icon={reorderThreeOutline}
            size="large"
            slot="start"
            aria-label="Categories"
          />
          <IonIcon
            icon={cart}
            style={{ fontSize: "28px" }}
            slot="end"
            aria-label="Cart"
          />
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {products.map((items: ProductDetails) => (
                <div className="embla__slide" key={items.id}>
                  <div
                    className="embla__parallax"
                    onMouseEnter={() => setShowDescriptionById(items.id)}
                    onMouseLeave={() => setShowDescriptionById(0)}
                  >
                    <IonCard>
                      <div className="embla__parallax__layer">
                        <img
                          className="embla__slide__img embla__parallax__img"
                          src={items.images[0]}
                        />
                        <div
                          className="content-container"
                          style={{
                            bottom: showDescriptionById === items.id ? 0 : -150,
                          }}
                        >
                          <IonCardSubtitle>{items.category}</IonCardSubtitle>
                          <IonCardTitle>{items.title}</IonCardTitle>
                          <IonCardContent>{items.description}</IonCardContent>
                        </div>
                      </div>
                    </IonCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((items: ProductDetails) =>
            items.category == "laptops" ? (
              <SwiperSlide key={items.id}>
                <IonCard color="light" className="container">
                  <img className="image" src={items.images[0]} />
                  <IonCardHeader>
                    <IonCardSubtitle>{items.category}</IonCardSubtitle>
                    <IonCardTitle>{items.title}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    {textFormater(items.description)}
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            ) : null
          )}
        </Swiper> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
