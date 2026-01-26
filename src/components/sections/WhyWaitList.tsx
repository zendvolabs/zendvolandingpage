'use client'
import { ChevronDown } from 'lucide-react';
import EarthBg from '../../../public/img/earth-bg.png'
import { PhoneInput } from '../inputs/PhoneInput';
import { Input } from '../inputs/inputs';
import SelectField from '../inputs/SelectField';
import CountrySelect from '../inputs/CountrySelect';
import IconSelect from '../inputs/SelectField';
import { useState } from 'react';
export const WhyWaitList =()=>{
  const interests = [
    { value: "family", label: "Sending gifts to family" },
    { value: "friends", label: "Sending gifts to friends" },
    { value: "business", label: "Business gifting" },
    { value: "occasions", label: "Special occasions" },
  ];

  const [interest, setInterest] = useState(interests[0]);
  return (
    <section className="bg-[#F6F6F9] py25 lg:py-50 px-5">
      <div className="max-w-273.75 bg-white rounded-4xl  mx-auto px-4 py-10 md:p-10 lg:p-15">
        <div className="mb-6">
          <div className="flex items-center flex-col gap-1 text-center">
            <h4 className="text-2xl md:text-[2rem] font-bold leading-10 text-[#18181B]">
              Why Join The Waitlist Now
            </h4>
            <p className="lg:text-lg   leading-6 text-[#18181B]">
              Be First In Line "Get access before the general public. Skip the
              wait when we launch. Be among the first people in the world to
              transform how you send money.
            </p>
          </div>
          <div>
            <div></div>
            <div>
              <div>
                <p>Lock In Lifetime Pricing</p>
                <p>
                  Current plan is 2% fees. As we scale globally, that might
                  change for new users. Join the waitlist and lock in founding
                  member rates for life. Pay less, forever. This alone could
                  save you hundreds over the years.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  gap-15  flex-col justify-center items-center lg:flex-row h-fit!">
          <div
            style={{
              backgroundImage: `url('${EarthBg.src}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="rounded-4xl h-82 lg:h-151 lg:flex py-6 px-5.5 md:px-8 md:py-7   max-w-115"
          >
            <p className="text-2xl font-bold leading-8 text-[#44349F]">
              Get Early Access & Founding Member Benefits
            </p>
          </div>
          <div className=" w-full max-w-113">
            <form className="space-y-12">
              <div className="space-y-7">
                <div className="flex gap-4 ">
                  <Input label="First name" placeholder="Details" />
                  <Input label="Last name" placeholder="Details" />
                </div>
                <div className="flex gap-4 ">
                  <Input label="Email address" placeholder="Details" />
                </div>
                <div className=" ">
                  <PhoneInput
                    id="phoneNumber"
                    label="Phone Number"
                    placeholder="81 123 456 78"
                    // value={formData.phoneNumber}
                    // onChange={handleChange("phoneNumber")}
                    // error={errors.phoneNumber}
                    // countryCode={formData.countryCode}
                    // onCountryCodeChange={(code) =>
                    //   setFormData((prev) => ({ ...prev, countryCode: code }))
                    // }
                    autoComplete="tel"
                  />
                </div>
                {/* Interest */}
                <CountrySelect />
                <IconSelect
                  label="I am most interested in"
                  value={interest}
                  options={interests}
                  onChange={setInterest}
                />

                <div className="flex gap-4 ">
                  <Input
                    label="Which country would you most like to send gifts to(optional)"
                    placeholder="Nigeria, Kenya, Philippines."
                  />
                </div>
                <div className="flex gap-4 ">
                  <Input
                    label="What occasion would you use Vaultly for first? (optional)"
                    placeholder="My mom's birthday, anniversary, graduatio"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="p-3 md:text-lg font-bold bg-[#5A42DE] rounded-lg leading-6  text-white">
                  Secure My Founding Member Spot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}