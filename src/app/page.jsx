export default function Home() {
  return (
    <main className="px-40">
      <section class="align-element py-20">
        <div class="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h1 class="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
              We are changing the way people shop
            </h1>
            <p class="mt-8 max-w-xl text-lg leading-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <div class="mt-10">
              <a class="btn btn-primary" href="/product">
                Our Products
              </a>
            </div>
          </div>
          <div class="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
            <div class="carousel-item">
              <img
                src="https://e-commerce1-psi.vercel.app/assets/hero1-KU35HB-O.webp"
                class="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://e-commerce1-psi.vercel.app/assets/hero2-CsYukw0T.webp"
                class="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://e-commerce1-psi.vercel.app/assets/hero3-ChjKXzKm.webp"
                class="rounded-box h-full w-80 object-cover"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://e-commerce1-psi.vercel.app/assets/hero4-DNQvcQrD.webp"
                class="rounded-box h-full w-80 object-cover"
              />
            </div>
          </div>
        </div>
        <div class="pt-24">
          <div class="border-b border-base-300 pb-5">
            <h2 class="text-3xl font-medium tracking-wider capitalize">
              featured products
            </h2>
          </div>
          <div class="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              class="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              href="/product/19"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                  alt="avant-garde lamp"
                  class="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title capitalize tracking-wider">
                  avant-garde lamp
                </h2>
                <span class="text-secondary">$179.99</span>
              </div>
            </a>
            <a
              class="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              href="/product/6"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
                  alt="coffee table"
                  class="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title capitalize tracking-wider">
                  coffee table
                </h2>
                <span class="text-secondary">$179.99</span>
              </div>
            </a>
            <a
              class="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              href="/product/7"
            >
              <figure class="px-4 pt-4">
                <img
                  src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                  alt="comfy bed"
                  class="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title capitalize tracking-wider">comfy bed</h2>
                <span class="text-secondary">$129.99</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
