<template>
    <h1 class="text-3xl sm:text-5xl text-center font-bold my-10">
           Contact Us
    </h1>
    <div class="grid xl:grid-cols-2 grid-rows-2 xl:grid-rows-none m-5">
        <div class="xl:mx-5">
          <div class="bg-white p-4 shadow-md rounded-lg w-full">
                        <form action="/action_page.php">
                            <div class="mb-4">
                                <label for="name" class="block text-gray-700">Name:</label>
                                <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="name" placeholder="Enter your Name" name="name">
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-gray-700">Email:</label>
                                <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" placeholder="Enter email" name="email">
                            </div>
                            <div class="mb-4">
                                <label for="message" class="block text-gray-700">Your Message:</label>
                                <textarea class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" id="message" placeholder="Your Message Here" name="message"></textarea>
                            </div>
                            <div class="text-center mt-5">
                                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                            </div>
                        </form>
                    </div>
        </div>
        
        <div class="xl:mr-5">
            <div class="mb-5 justify-self-end">
                    <div class="w-full">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6063.307369311151!2d77.5028504419395!3d13.03598739008661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0a40ad5761%3A0xe5a58bef32d6e1b7!2sChrist%20University%20Yeshwanthpur%20Campus!5e1!3m2!1sen!2sin!4v1713459978814!5m2!1sen!2sin" 
                            allowfullscreen 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade" 
                            class="w-full h-[350px]  rounded-lg">
                        </iframe>
                    </div>
                </div>
        </div>
        
    </div>

</template>

<script setup>

</script>