import React from 'react'
import ab1 from '../../assets/ab-1.png'

export default function PrivacyPolicy() {
  return (
    <div className='py-6 px-32'>
      <div className="rounded-2xl overflow-hidden relative">
        <img
          src={ab1}
          alt="Marketplace"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy policy</h1>
          <p className="max-w-2xl text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Vulputate orci elementum mauris pellentesque semper non imperdiet in...
          </p>
        </div>
      </div>

      <div className='mt-4 space-y-6'>
        <section>
          <h2 className='text-2xl font-bold mb-2'>Introduction</h2>
          <p>Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. Our services are designed to provide you with the best user experience and enhance your productivity. We strive to continuously improve our offerings and appreciate your feedback. Please ensure that your use of our services complies with all applicable laws and regulations. Thank you for choosing our platform, and we look forward to serving you. Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. Our services are designed to provide you with the best user experience and enhance your productivity. We strive to continuously improve our offerings and appreciate your feedback. Please ensure that your use of our services complies with all applicable laws and regulations. Thank you for choosing our platform, and we look forward to serving you.</p>
        </section>
        
        
        <section>
          <h2 className='text-2xl font-bold mb-2'>User Responsibilities</h2>
          <p>Users must ensure that their activities on our platform comply with all applicable laws and regulations. Users are responsible for obtaining any necessary permissions or licenses before using our services. Users must also ensure that their activities do not infringe on the rights of others, including intellectual property rights, and that they do not engage in any illegal activities. Users are also responsible for their own actions and are not protected by any legal action if they break the rules.Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. Our services are designed to provide you with the best user experience and enhance your productivity. We strive to continuously improve our offerings and appreciate your feedback. Please ensure that your use of our services complies with all applicable laws and regulations. Thank you for choosing our platform, and we look forward to serving you.</p>
        </section>
        
        <section>
          <h2 className='text-2xl font-bold mb-2'>Agreement</h2>
          <p>By creating an account, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. By accessing or using our services, you agree to comply with all applicable laws and regulations. You are responsible for any information you provide to us, and you must ensure that such information is accurate and up-to-date. You are also responsible for maintaining the confidentiality and security of your account and for any activities that occur under your account. You must notify us immediately if you become aware of any unauthorized use of your account or any breach of security.Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. Our services are designed to provide you with the best user experience and enhance your productivity. We strive to continuously improve our offerings and appreciate your feedback. Please ensure that your use of our services complies with all applicable laws and regulations. Thank you for choosing our platform, and we look forward to serving you.Welcome to our platform. By accessing or using our services, you agree to be bound by these terms. Our services are designed to provide you with the best user experience and enhance your productivity. We strive to continuously improve our offerings and appreciate your feedback. Please ensure that your use of our services complies with all applicable laws and regulations. Thank you for choosing our platform, and we look forward to serving you.</p>
        </section>
      </div>
    </div>
  )
}
