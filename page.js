import Image from "next/image";
import orderms from"../../public/orderms.jpg"
import surfaces from"../../public/surfaces.jpg"
import stanza from"../../public/stanza.jpg"
import gladwell from"../../public/gladwell.jpg"
import rugland from"../../public/rugland.jpg"
import capra from"../../public/capra.jpg"
import broccoloni from"../../public/broccoloni.jpg"
import unbox from"../../public/unbox.svg"
import shoppingcart from"../../public/shoppingcart.svg"
import truck from"../../public/truck.svg"
import cartremove from"../../public/cartremove.svg"
import handtruck from"../../public/handtruck.svg"
import analytics from"../../public/analytics.jpg"
import app from"../../public/app.jpg"
import business from"../../public/business.jpg"
import communication from"../../public/communication.jpg"
import automate from"../../public/automate.jpg"
import website from"../../public/website.jpg"
import Manufacturers from"../../public/Manufacturers.jpg"
import Retailers from"../../public/Retailers.jpg"
import Wholesalers from"../../public/Wholesalers.jpg"
import Distributors from"../../public/Distributors.jpg"
import fb from"../../public/fb.svg"
import x from"../../public/x.svg"
import linkedIn from"../../public/linkedIn.svg"
import floatingImg from"../../public/floatingImg.jpg"
import floatingImg2 from"../../public/floatingImg2.jpg"
import floatingImg3 from"../../public/floatingImg3.jpg"
import floatingImg4 from"../../public/floatingimg4.jpg"
import styles from "./page.module.css";



export default function Home() {
  return (
    <main className={styles.main}>
       <nav className={styles.nav}>
      <div className={styles.description}>
        { <Image
              src="/logo.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={120}
              height={30}
              priority
            />}</div>
            <div className={styles.header}>
           <ul className={styles.nobullet}>
           <li>Product</li>
           <li>Pricing</li>
           <li>Company</li>
           <li>Resources</li>
           <li>ContactUs</li>
           <li>SignIn</li>
          </ul>  
            </div>
        <div>
        <button class={styles.button}>Free Sign Up</button>
        </div>
      </nav>
      <div className={styles.content}>
     <div className={styles.main}><p class="text-xl text-muted-foreground">🏆 An Award Winning
     <h1 class="heading-l">Inventory and Order<br></br><span>Management</span><br></br>Software</h1>
     <p class="mt-5 text-xl ">Be it a <span class="font-bold">Retailer</span>,<br></br> or own multiple <span class="font-bold">Warehouses</span><br></br>You are in safe hands</p>
     <a href="/sign-up"><button className={styles.signup1}>Sign up for free</button></a>
     <div className={styles.demo1}><button class={styles.demo}>Schedule Demo</button></div><div className={styles.svg}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" class="h-6 w-6 mr-2 text-gray-600"></svg></div>   
     </p>
     {<div className={styles.picture}>{ <Image
              src={orderms}
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={500}
              height={480}
            />}
            </div>}
            <div>{ <Image
              src={floatingImg}
              alt="Vercel Logo"
              className={styles.floatingImg}
              width={150}
              height={44}
            />}
            </div>

            <div>{ <Image
              src={floatingImg2}
              alt="Vercel Logo"
              className={styles.floatingImg2}
              width={150}
              height={45}
            />}</div>
            
            <div>{ <Image
              src={floatingImg3}
              alt="Vercel Logo"
              className={styles.floatingImg3}
              width={150}
              height={47}
            />}</div>
            
            <div>{ <Image
              src={floatingImg4}
              alt="Vercel Logo"
              className={styles.floatingImg4}
              width={100}
              height={100}
            />}</div>
     </div> 
     <div className={styles.textborder}><div class={styles.textcenter}><h2>1,500+</h2><p>Amazing Clients</p></div><div class={styles}></div><div class={styles.textcenter}><h2>100+</h2><p>Awesome Countries</p></div><div class="border"></div><div class={styles.textcenter}><h2>2M+</h2><p>Orders per year</p></div></div>
</div>
<div><button class={styles.whyus}>Why OrderMs</button></div>
<div className={styles.text}>
<h2 class="heading">Startups to Unicrons everyone<br></br>chooses OrderMS</h2>
</div>
<div className={styles.companies}>
  
{ <Image
              src={capra}
              alt="Companies"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />}

{ <Image
              src={broccoloni}
              alt="Companies"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />}

{ <Image
              src={gladwell}
              alt="Companies"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />} 

{ <Image
              src={rugland}
              alt="Companies"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />}

{ <Image
              src={stanza}
              alt="Companies"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />}


{ <Image
              src={surfaces}
              alt="Companies"
              className={styles.vercelLogo}
              width={100}
              height={100}
            />}


</div>

<div className={styles.textcenter}>
<p class="text-lg text-muted-foreground">Boost Your Sales with our cutting-edge </p>
<h2 class="heading">Sales Automation platform 📈</h2>
</div>
<div className={styles.sales}>
  <div className={styles.orders}>
  { <Image
              src={handtruck}
              alt="Companies"
              className={styles.ordersLogo}
              width={70}
              height={70}
            />}
            <h4 className={styles.ordertext}>Order</h4>
            <p className={styles.ordertext1}>Management</p>
  </div>
  <div className={styles.orders}>
  { <Image
              src={unbox}
              alt="Companies"
              className={styles.ordersLogo}
              width={70}
              height={70}
            />}
             <h4 className={styles.purchasetext}>Purchase</h4>
             <p className={styles.purchasetext1}>Management</p>
  </div>

  <div className={styles.orders}>
  { <Image
              src={shoppingcart}
              alt="Companies"
              className={styles.ordersLogo}
              width={70}
              height={70}
            />}
<h4 className={styles.Inventory1}>Inventory</h4>
<p className={styles.Inventory2}>Management</p>
  </div>

  <div className={styles.orders}>
  { <Image
              src={truck}
              alt="Companies"
              className={styles.ordersLogo}
              width={70}
              height={70}
            />}
            <h4 className={styles.warehouse}>warehouse</h4>
            <p className={styles.warehouse1}>Management</p>
  </div>

  <div className={styles.orders}>
  { <Image
              src={cartremove}
              alt="Companies"
              className={styles.ordersLogo}
              width={70}
              height={70}
            />}
            <h4 className={styles.Return}>Return</h4>
            <p className={styles.Return1}>Management</p>
  </div>
</div>

<div className={styles.analytics}>
{ <Image
              src={analytics}
              alt="Companies"
              className={styles.ordersLogo}
              width={900}
              height={500} 
            />}
</div>
<div><button class={styles.whyus}>Mobile App</button></div>
      <div className={styles.application}>
      <h2 class={styles.heading1}>Go mobile with our iOS and Android App 📱</h2>
      </div>
      
      <div class={styles.app}>
      { <Image
              src={app}
              alt="Companies"
              className={styles.ordersLogo}
              width={700}
              height={430} 
            />}
      </div>
      <div><button class={styles.whyus}>Core features</button></div>
      <div className={styles.business}>
      { <Image
              src={business}
              alt="Companies"
              className={styles.ordersLogo}
              width={450}
              height={358} 
            />}
      <div className={styles.businesstext1}><h2>Take your business to New Highs</h2></div>
     <div><p className={styles.businesstext2}>Managing your locations and users is now as easy as a<br></br>piece of a cake. Connect, Monitor and Manage<br></br>unlimited warehouses, stores and other locations. Become an Omni<br></br>Merchant with OrderMS’s amazing E-Commerce enabled<br></br>platform. Take your business Global.</p>
      </div>
      </div>
      <div className={styles.communication}>
      <h2>Sales Communication</h2></div>
      <div><p className={styles.stock1}>Avoid making last minute calls and keep yourself updated<br></br>on your stock movements. Email alerts and mobile<br></br> notifcations on Stockouts, Stock shipments, low stocks and<br></br>everyting you seem is important to know.</p>
      </div>
      <div className={styles.communicationimg}>{ <Image
              src={communication}
              alt="Companies"
              width={450}
              height={358}
            />}
            </div>
      <div className={styles.automate1}>
      <div className={styles.automate}>
      { <Image
              src={automate}
              alt="Companies"
              width={450}
              height={381}
            />}
      </div>
      </div>
      <div class={styles.auto}><h2> Automate your Business</h2></div>
      <div className={styles.auto1}><p class={styles.autop}>Managing your locations and users is now as easy as a<br></br>piece of a cake. Connect, Monitor and Manage unlimited<br></br>warehouses, stores and other locations. Become an Omni<br></br> Merchant with OrderMS’s amazing E-Commerce enabled<br></br>platform. Take your business Global.</p></div>
      <div><button class={styles.integration}>Integration</button></div>
      <div className={styles.website}>
      { <Image
              src={website}
              alt="Companies"
              width={800}
              height={500}
            />}
      </div>
      <div className={styles.centerp}>
        <h2>Efficiency through<br></br>Seamless integration</h2>
      </div>

      <div><button className={styles.B}>Business</button></div>
     <div className={styles.enchance}>
     <h2 class="text-5xl font-bold text-center ">Enhance your business<br></br>efficiency to 10x</h2>
     </div>
     <div className={styles.enchancep}>
     <p class={styles.enchance1}>OrderMS will trace every single stock from the entry point to the exit. Keep record of your transactions <br></br> to bring you data-driven insights to help your business grow.</p>
     </div>

     <div className={styles.boxes}>
      <div className={styles.box1}>
      { <Image
              src={Manufacturers}
              alt="Companies"
              width={50}
              height={50}
            />}
            <h3 class={styles.ManufacturersP}>For Manufacturers</h3>
            <p class={styles.Manufacturersp1}>Highly customizable for your manufacturing business.</p>
      </div>
      <div className={styles.box2}>
      { <Image
              src={Retailers}
              alt="Companies"
              width={50}
              height={50}
            />}
              <h3 className={styles.ManufacturersP2}>For Retailers</h3>
              <p class={styles.Manufacturersp2}>From traditional retailers to E-commerce and omni merchants it covers everyting.</p>
      </div>
      <div className={styles.box3}>
      { <Image
              src={Wholesalers}
              alt="Companies"
              width={50}
              height={50}
            />}
            <h3 class={styles.ManufacturersP3}>For Wholesalers</h3>
            <p class={styles.Manufacturersp3}>Taking your wholesale business to new heights because we understand your needs.</p>
      </div>
      <div className={styles.box4}>
      { <Image
              src={Distributors}
              alt="Companies"
              width={50}
              height={50}
            />}
            <h3 class={styles.ManufacturersP4}>For Distributors</h3>
            <p class={styles.Manufacturersp4}>Manage your distribution business and channels with ease and automation.</p> 
      </div>
     </div>
     <div><button class={styles.Testimonials}>Testimonials</button></div>
     <h4 class={styles.Testimonialsh}>Testimonials</h4>
     <p className={styles.Testimonialsh1}>We understand that every solution is supposed to be embedded with an amazing<br></br> Customer Support to succeed. See what our customers have to say about us:</p>
    <div className={styles.comments}>
    <p className={styles.commentsp}>This service is brilliant I made full use of the 1 month free trial and now have signed up. It is so easy to use and fully functional to help with my inventory!</p>
    <div><h2 className={styles.commentsh}>Mueez</h2></div>
    <div><p className={styles.commentsp1}>Surfaces Furnishing</p></div>
    </div>
    <div>
    <h2 class={styles.Inventory}>
        Grow your Orders
        <br></br>Automate Your Inventory
      </h2>
    </div>
    <div>
    <p class={styles.location}>
        To scale your business from one location to multiple and from fewer
        product lines to many
        <br></br> we have got an ease solution for you. Don’t miss out your last
        chance.
      </p>
    </div>
    <div className={styles.email}>
    <div><p class={styles.emailp1}>Email</p></div>
    <div className={styles.signupdiv}>
      <div><h3 className={styles.signup}>Sign up For Free</h3></div>
      </div>
    </div>
    <div className={styles.footerlogo}>{ <Image
              src="/logo.svg"
              alt="Vercel Logo"
              width={120}
              height={30}
              priority
            />}</div>
   <div className={styles.footer}>
   <div className={styles.Product}>Product</div>
               <div className={styles.ol1}><ol>Order Management</ol>
                <ol>inventory</ol>
                <ol>Warehouse Management</ol>
                <ol>Purchase Management</ol>
                <ol>Return Management</ol>
                </div>
                <div className={styles.company}>Company</div>
                <div className={styles.oli2}><ol>About Us</ol>
                <ol>Pricing</ol>
                <ol>ContactUs</ol>
                </div>        
                <div className={styles.resources}>Resources</div>
                <div className={styles.oli3}>
                <ol>Blog</ol>
                <ol>Glossary</ol>
                <ol>FAQs</ol>
                </div>
                <div className={styles.solution}>Solution</div>
                <div className={styles.oli4}>
                <ol>shopify Order Management</ol>
               </div>
</div>
<div className={styles.ends}>
<p class>© 2024 OrderMS</p>
<p class>Privacy Policy</p>
<p class>Terms &amp; Conditions</p>
<p class>Activation Policy</p>
<p class>Cancellation &amp; Refund Policy</p>
<div className={styles.social}>
{ <Image
              src={fb}
              alt="Companies"
              className={styles.fblogo}
              width={20}
              height={20}
            />}
            { <Image
              src={linkedIn}
              alt="Companies"
              className={styles.vercelLogo}
              width={20}
              height={20}
            />}
            { <Image
              src={x}
              alt="Companies"
              className={styles.xlogo}
              width={20}
              height={20}
            />}
</div>
</div>
    </main>
  );
}
