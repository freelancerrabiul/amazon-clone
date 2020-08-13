import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <img className="home__image"
             src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg"
             alt=""
           /> 
           {/* props id,title,rating,image,*/}
           <div className="home__row">
                <Product
             id="125478"
             title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
             price={11.39}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"                
          />

           <Product
             id="125478"
             title="illo mollitia officiis amet, necessitatibus quis iure natus saepe qui"
             price={30.17}
             rating={5}
             image="https://m.media-amazon.com/images/I/81Q34lJFJKL._AC_UL320_.jpg"                
          />
           </div>

           <div className="home__row">
                <Product
             id="125478"
             title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet blanditiis "
             price={37.67}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/41PYkNWSrAL._AC_SY200_.jpg"                
          />
           
          
          

           <Product
             id="125478"
             title="laudantium quas eligendi! Quaerat, eaque nulla.ea commodi veldeserunt"
             price={91.40}
             rating={5}
             image="https://m.media-amazon.com/images/I/81B3K9HgqJL._AC_UL320_.jpg"                
          />

          <Product
             id="125478"
             title="Samsung Galaxy S10 Case, [ Military Grade ] 15ft. Drop Tested Protective Case | Kickstand | Compatible with "
             price={25.17}
             rating={5}
             image="https://m.media-amazon.com/images/I/71xn9bCRfhL._AC_UL320_.jpg"                
          />
           </div>

           <div className="home__row">
           <Product
             id="125478"
             title="Samsung CJ89 43, Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA), Black" 
            
              
             price={399.99}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg"                
          />
          
           </div>


           <div className="home__row">
                <Product
             id="125478"
             title="WD 2TB Elements Portable External Hard Drive - USB 3.0 - WDBU6Y0020BBK"
             price={11.39}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"                
          />

           <Product
             id="125478"
             title="illo mollitia officiis amet, necessitatibus quis iure natus saepe qui"
             price={30.17}
             rating={5}
             image="data:image/webp;base64,UklGRuIUAABXRUJQVlA4INYUAAAQZwCdASrrACwBPrFQnkokIqiipNVcIRgWCeVud8gQkN8eWcN7uHjrHytm+kH/B+oB/pOjVzuHox/wXmzdcB6GPS1f4XJEWndID8emt06+ebtNmNdpvQU9v8FfVQyAOGAoBfz//NesV/qeVf629hHy1vY5+6PtAFirPbI42ZjBX//z1Dk3lkSafaK2afOEqT3RVXVpXLTB4vPda+m07DSSTCp+lK/E+L/1GmVNHFT3MbgPJS0vPbyTcot0V8VHdu7CNuDMggfjlZSbhHgzITre85qFwsndFIfXxinRS4TaqjZRPKlWG6dhKcy9xCMN7MVoODwREqwjcHCy1ndbXN52Co9/3ZZqCLcoWy+w7bDrWLrzFvnftzZ2hyDwkBlFbL91NmFWmf4X4c0PRFNhqKmfNyJdd4oSvE7T1Aj+/M2OoejO3/Z01uVHy0FVl9Zs9iLCmv5larlccW1QKEpPxb192xyCeQZHbRk3Bn/TiUNi95MPRrlXZgXgi1wCzrFOH5sONHUvJA+aCU7T5sOQyESE+w0dT6/sY2o0bLA4FWC6zey0SWDq+NcuISUMChz5JrescRmhmREbMkVjuRfUx9Eoh2qxXz2Y5vVERdgkAHwAEchnmwr4jm9BkYi4xuq3FvVzCgmncJahoqHANVY7bug2vYaGjA6aDKf6Q/6ymreRn4O3mq9678XosF31b6a2rqcVN/+u8qGIFt0GKxB2L7spv5xM0WdKJoI0QZsYbaZ/8h4gZoyQQ1RITvJdICBWDKVK4pSAGfbprKjjJaZlYcozqD4X0yRWdMkuX2LP+c88LXjYxOlGtPQeREuCkHXf1HiUVFQG4H3M8HpXhTWKkb3+nmPBeMqipGFX146DRELZgrU8EBnCvUTUNKdH8px/DiXzCNPzzMhmC0H1OjWi4Ri5NKER9KGb0xa6l5fsgc8tXU9AiTsZOC76WQaNnOLMpcsVzPTxGNhHB/5cxqYeOCQ/PLpxBO5O5anL8blcXJ0NIsw3gRIU1eJJLLRUrIM5zTxfaEq0MSygWSOy4+WgmGffAOcjc5d/rlaA/aYTdApF9hNLKw3aiYZVe+DM06ofbf9TkBk0PO8LaEhdVaB68yJoAAD+/m5fWkYSg71KmXJGe+1Uj2E9L7kJiGQtnUIy/R2IePRoc41DrU9/X7Z1T0VXCcLzeT4KIzUJQhlMh3VuagE859gR2FUrCNjoqoLwakHPxSoacuz1MZYb1gThcwYgxo7c+/HhEUhu/6qH3qqtZNphtCHgFZa6X3fPyzhzHF4TX39xxbAQ3bO3gPMcWFX+PZOC38YOksGvKtLlhtYKwwExanJLiARH3+lceNUVFwdQzxj6iN80B4/w9odJaFLYo6v7PsIW1uxl0w4VadPOwxo2N+6iMn0ADTw+PluW+UZEvU8IoKfD6SwreNKd6IaXXV7C4G0pNv5+pejGVRyn2+46lqorG8nS7L45iVPz4gWFOze/VG9IrzCGoLg+34FBaMMaIklUzysv8rpLAbvCHoicPlzy/4sLBz8oSusH/umxHSSZ4yUXbrBwaw/v/EWvT1VPPaoxdLO8OrB3WU3gN+fbSIDKM5wg6xAVpV8A9ADDT1xibYFVqniOISfpIv2f++TLqELJ4HvDCmoJYe4TYRQrRlWQ7tu6gYgoHIXmDnO3WloZDPNdju1dBhuHN1MK742I42vTAK0ncb73CRTesva9Q1vhNrc7VDSAL7MDI7+IOGcOqVJFxqOPSNwuh3GzjVmLJHa1YjzcZk4Q70mzdAcbacrGOWRTAm7e1Y4GRoU78BGX+q7bIY8Az3qC0D/GGSq82oc91cauhaqGfndOJBE58/cfeiv//0uv8TuCVJ+b52VStE3cR7W3miumDxkWAdOJBm3pSd4pr/EZbG5Y/QLf35HLCgMB0jrU1W1eeEz/ldayxwM/Xa1VmLFvuM62/vcBkCOW4keQhRyyAapUKckG16Z6k5DKMM0AssQuCarb6p47BUJ1TpxnGVvl1lmaKow5gY8aow0O3b/Bk/D6akIKzJV1xlz2QVyqM6/jP/mpZOoPILKdwobLOQ+FvCM/7txDp/u2fYfpl4tnDXQoOdoY1HD3+QSp0cq+cDKrniOiBQHyQYOtZHzkaBE9D6clSroSZd5WtRsKrFF8spRHLpfLnw+DoCDbsxp+f0d9SoVnv77dhNqmajU477nM7Ig3QkygnT5kRtSzkVi72iySQJ7hWa7Y1iNoRLDSuUxebrl6Jx+3KwIBCE5k5wnuOvveOF7G145GHXqff/mYt7Kg+VvfgoBDYah/+p8gfzt66aLJ/L3QH3S+hzT7p+S9AvXW3XAVVK5jD1YfTSf5xZH7e0neomRTX8HACku7alPK2RJ2Z4uPC95nt/nSMXGToTddr9VSHd/Q8hotQLbJJWrxQSlHiYvA9vwLPVoEwZFWx37+ejVHQUY2f4XqdR71Q2KQmJ/03vsL+YEUGfgITmaKnk+7O5xFabqJPcjIHCJ1UqhUDPzsWvavViDMxAwhHWuE0RjOFXE2DJI5oTsTskLeCv6wtQwK7jP/NTTHw1vwGZpnDI9EEs/hQoPmsUjkU5z3L+WA7O4DVurl3tutMPT48O5w9mDFtaUCZmTk2MQZiZCZqWtv3jYe0yv9u4++GAhc9iXFHeU4zYEOUq3vdMpRfm2NbkSzoA+I3bQCeF3ndOAdGmKVGffsupB49dr1rSmTRyZ7hjOamwEs2U7YYOtIW7iW2Ds9yfKxlR3wDPfaCw7P3+thxE1yNVvwxfsPCHxz/fn2KbHGBcWWH28kpMD4FaY5odG9tmLGw1Uew3uLat//m2R2THEFl4oH0eYSSZulMQawWohKCnWd0YBhXa7jfUiRd+GK1qlHo5LjPyFRWeNdNQbu55uZ8l9xV5JovGsqpmbmNggI774KeIeDRyN/W/+APb/iezTD8IH53Ic899KNv5bev+D3Isiylv916495j2Ho5UGvaeHI0Bwc4Fx6MBoznX29G7b4Reu0BCkYSnW4r+Ok5tOT//v2M/JAQ0bqwP+x8Iwtfpq2spTJf/jwbF9Jl4MGG9/wZB7Spa1wOYFKdZ9ZcycWQYVL8UbFbRmhKatLR4CubPa7upLjrX9cAFqulIDau5N1Ndut+snQiOJ1fCYigw6r91VZK1ij7RsPsn0QQhOInngdW/Hfl5ZFuIm2seORwaQ8mvIK0xjxosgN5/n3uZgvQhjrrwJU+reITQU9/wIuvRatIB/7ltdou84lz2o15t9yeb1wYyjcFqSmD5+pSsiRKF/G5MhWAr7StZzGmBVr/W5ZW70TQ0bQ2zmiegUG7CaYdKpat/58mmosleeO8Hahz7zMtUxjn2dvnV9ejnsX+LfRvk18AW7nLipOQnn4rnee2O4IRh5tPdICiogv0ESHwXOlqYn6y+NKxTLO1Lm3Xpm8JtvqwiOcTD2OKP/nrkOK1uD7A3GIYITG0deuLUpWvcBzoIIVpkowKwuuF8LCci74IV8dTWOtmmd+ITFaQ1TosKj6L82wYlv5xCGuHuUOLUeQX98mNtC372jtILKDmXMT+gA/m8GROFUBmMLs3pJdUGuJ5dHwPB9QFGVqj+hDe5O8KXIhe5Ipomr7sbQOZ9VZRZYGrDreUhREYYClEXQxLDV96S94t5kF4vGUxser6Rvrc8i5j84eRlljyJM9Tqr6hAx9tkrcae+UY3lU+K4FFh8j3IpeEQljjWzJIyQt26ECJ174D+DGwajfLKFwHneqIxQBJV9peTpA3odnnOQupP6YT/ENSWEXB6QEQRuoxVk3KCTQOL4atsa92xBIPUEnbNLb48s+VZIwE67bp5+F+QQ/8XkFfkIXrTmikfJ87oYNMAyOdMKWk8sOmp0Pb3ADMERXthanSpWy6+9ehj5s9wk7t07MtlVn7yE6kP2h5ne3r5L+Cgke/j6DypUNh2FJGSHcoan4SSm7CT8w9u6MmfdFJhb9JuFfQzfzv3u5hmWwYOJHzzZ5hhRsrNXOw0hBVNwcG8DUzpo3auhIdGmwe5T14tfpKAwjErqJQfaGUscqGSFcWOZxsLsiBFq/uCYtszphdPY4H4V7AWyhNiEUaoMIw60BwZmpvv1D+6ezO43hFTBGwT0WsHJzlZe1dC2c+lQZdb47fQhzVILZseke4BFC2/feXgrVtx9EvfWbzNm+0ESo8FhxNEzP5wHj1XW7UgEE4vo0z8v3PCMx12RLaGXJFa+DJqmA/SUmOvVKWS8ETqYys14O+ZbF1/Z3O6TMZfoqTLVQhm45SuQrzJOJ4xm2OrcU19M85gQix9TDzi2heUhS5gz6+hGJX+JkDZBWxyt0FC0A4WueDre1wAFY0ISQYnxC0dX95sQp6OVgC3yYAIOBhE7DAWubAi6qi/d9Iu1trpvjni5F08ow8ZUpe8j4leb2yBGGD996/Kv6GQmfrZ35XaqFjuhSZ2ODddAZUBQs3sou1Mq+q0E84br8DZylD7cy+LNhHh9KMP7gpLNsExNXZMninVSYJgPqafxEZyANunuxMrWLnXqHzYE0VKBg3feW5T9C5TZcjyZ3hSEakwnhKUgwMh6/WlalqGzdyGNJz2ni2/0L+reZiBEA6XGS3K28MA0BovfvQOynZs7ZHDP6DleXeUaxNK7bgURNC7/zKH86FOc9KXjgkRzwSoPfucpk8WRIMAe2mBWBMX4LGRfChwieDW29ywLXz8PGyK/h2iDHal+IaZl80no/kzpu2OpksVVnJSdG0K8/Ae9nzkGFohY1177Y2qkEMU2s2ly/PTkFzNNLsTdL5cDeF50PnyZu2xo51HLlSFnQF/uKn8UPuH6ScARI6Cp6J9CgJ9gRpmjugPdDjHbiznuwl+dmI2WYw3udqFlnG7wGtZJ7J5qnytaD1N6+lUNgetKJeN4kgRAJQQP7FFbeQBXrHlYpH7qPFJAN5PuwP3za8zyrDz4fWBtDVzLiKDcl23Y2P3MWVYQ3cch4wjZc+PLGBptcgYqM1T+Mue8J+wzZ3Snm+D0YfKbXzneZXfcZKG5yg+OcG4jWie8s4myx78M8ANvrBGGQo86Yl/+3p24G+ZelKMFSSv12OEvMNvn+97xdGlXjKXYa54Ix3q0VbJjWOzYyQS8m1peDAz4Dwas/E6vcnA39rovvf869VU61Q3D2EOMW55bGeiAslmFLsEV7jmM39u1W4LY6DrHWqrewSQlbM5qPik/j8bu4QMI0DcfzoVM/okZTBGdrO8GMgcgaJ55b1cvRVgP6Sd4L7OqxSr4cfA3M+DZdq5ohMURyeAWPxrsdocpOWQyeKSfsBc5rNTrHiJgpGAdpktJ7Z9MPb/XgcuoOrufC+9h3Hz4towsNQT8Rzx6zubs65cukFWxtmTOrtuqq0dYxKpFFqDLHqE8tueE1rwRYMLAZE2FGH0pyZTfovkNFwBXvmPGFaThtNy2wJ2vPSH44//2Kwu2oXEF2kQM7tD6IEzgFFHq+y9kO5zZ4SOjH15HjBmsi1qwPmPMkcFiaqMkMsO+wEuYiO0MDWlRs6UPwpIt6GuLZQUqBHCtfsKSIbC+uQz3v9b21GfVOvgHjlyPkdUsteSEhZd0Aw6YdE0bO2O1Ye0kGiBRNYPTYeNs+fTFUQTtxDu+4F0zWYkhtBi+uqG2zT4gt/inNv+BYQS/Nu41vWDlrnSjH9KoSelAWoAbf/8mvIwurYZMrehKoK61/ads6+1/QQQIIMBOJatVRItQM3I+YKfgZNx5/hDD30ZXBEO+SQoZAnAm7E2zAOjPLiODrMKHHxQv6ToTfR6pV2Qz4pm3pvaQ+5fxMvaqw3L55qyF2Baf4PTFJN/9kxltGZmeya3KjtkSFX+l4tMqtYflQ2TzD9pZcgmfYIQZuTRn/6R7ojqAZleMk+b7QTe6wX3t1fW6OkxX6Gp7hFP+6+VvUdVFC030vz//UtxwI9lrqUA0erStx/TVWHxAWAH6eum3Krx5Ake+4wl6WLV7/huS5dPIziC+NGp6Js/DBTLADNxhVjcioG3cXc6xSvyW/WmWkVdx4ZDZHSq6L25D7ABNX6p1rGGvvVhzhSQxalWLsS29MPsXQcvlBkDlMNm9n4TF/yVjtUQ/zeTweTZ46/eNIj7O+hlZm577WPrOibfgvrI91dVvhQiqgD25vv1t8MyBmWs6FVByQkO/S5ODvU0Y7IW4HNzB9KyaIaMD0At24Oa0RY/bxYOVBgyY7I8AbPC+mhk7YaUrtfBTvjevVwT4q772e3zakQV8GctkjnfHBmBL8DzZjrP2jWVi/bb9P+o+ZUh1yVWTKk1lzmUlMRk3n88sGc7lY855fxWXh87pZH8jmjVSQZKSnrCCMku2wnq5FbVUvGWR/PvPLReu3q/lbhNyr60vbU1bNmsLYf3XPQ4IAvn2w/XV8+cz08+sDtP2s+8Bf4nE+i/EBguQ5T5z94jRxA6yuVZE8iRM9N2DKkZ/SgWvM4ZiGvvHcmYWjrVa3nZhpgqEuy/JSYoHTdAz6nMKrxsve1dcJcjl2Z5jEofJOogHNKfccC/SV36XDQJ5Nx1qwnZsRwaMR0D2gjG7TaTLJ0jfOuate7Ve4gPc3UYaBQ/YNJzkI5V423PvEV/e7MwzdgMQQHrB1jqtmvGLjagDpzp2Mj3SVoPiH1VANe+ikaMnHZ44WwFgv9IrZb/A28EuboHcDmZGYCf2zE2DIr+0Rkv5bsCiKt4KOObHUM6rVyRpeEr175zG6AQhvToEqZr24Ist3/tyUo/1TTCKawL7ZWRCIkKKj8uau7FjhMzxzLgv0KcxhWKQ5jdACRQnGCXaE75M5fVma622X6dT3dkV+dfcTZyrDAd/5puwJpR0mCm/McdNUeeb7LQfSc5NT22LzhQiQbxFHk4w0er0Mjz9nr9dfoXH78UPbH3a8LdNxPQT/2WL4kDoB5QeoJ6etNsGiLKc51R4khsqdml57sOKQsgCMthqa1eF3kYPJewIs7qhCZvzIbWzqL0SgYl5Nab7U5r5J2sV5mW1XGKsnmAer+6vRRQwqvEAd6xRgXydhRaLA5YvqWv0WoQ6AaK3PvRkWtOKeR2y0cMn6wmbsi0to3WlHc8Qkh6jFjXWA4EtPawbH8qBJh1hO1wnK+gAAAAA="                
          />
           </div>
           
           



           
           {/* Product*/}       
           
        </div>
    )
}

export default Home

