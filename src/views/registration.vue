<template>
    <h1 class="text-3xl sm:text-5xl text-center font-bold my-10">
        Registration
    </h1>
    <div class="sm:flex hidden overflow-x-auto flex w-full justify-center mb-5">
        <table class="min-w-3/4 border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th rowspan="2" class="border border-gray-300 px-4 py-2 text-center">Author Category</th>
                    <th colspan="2" class="border border-gray-300 px-4 py-2 text-center">Indian Delegates</th>
                    <th colspan="2" class="border border-gray-300 px-4 py-2 text-center">International Delegates</th>
                </tr>
                <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2 text-center">Early Bird (INR)</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Regular (INR)</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Early Bird (USD)</th>
                    <th class="border border-gray-300 px-4 py-2 text-center">Regular (USD)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">IEEE Student Member</td>
                    <td class="border border-gray-300 px-4 py-2">₹6000</td>
                    <td class="border border-gray-300 px-4 py-2">₹6400</td>
                    <td class="border border-gray-300 px-4 py-2">$100</td>
                    <td class="border border-gray-300 px-4 py-2">$125</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">Non-IEEE Student Member</td>
                    <td class="border border-gray-300 px-4 py-2">₹7500</td>
                    <td class="border border-gray-300 px-4 py-2">₹8000</td>
                    <td class="border border-gray-300 px-4 py-2">$150</td>
                    <td class="border border-gray-300 px-4 py-2">$200</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">IEEE Professional Member</td>
                    <td class="border border-gray-300 px-4 py-2">₹6000</td>
                    <td class="border border-gray-300 px-4 py-2">₹6400</td>
                    <td class="border border-gray-300 px-4 py-2">$100</td>
                    <td class="border border-gray-300 px-4 py-2">$125</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">Non-IEEE Professional Member</td>
                    <td class="border border-gray-300 px-4 py-2">₹7500</td>
                    <td class="border border-gray-300 px-4 py-2">₹8000</td>
                    <td class="border border-gray-300 px-4 py-2">$150</td>
                    <td class="border border-gray-300 px-4 py-2">$200</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Conference with Pre-Conference workshop - IEEE Member</td>
                    <td class="border border-gray-300 px-4 py-2">₹9500</td>
                    <td class="border border-gray-300 px-4 py-2">₹10000</td>
                    <td class="border border-gray-300 px-4 py-2">$250</td>
                    <td class="border border-gray-300 px-4 py-2">$300</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">Conference with Pre-Conference workshop - Non-IEEE Member</td>
                    <td class="border border-gray-300 px-4 py-2">₹12000</td>
                    <td class="border border-gray-300 px-4 py-2">₹12500</td>
                    <td class="border border-gray-300 px-4 py-2">$350</td>
                    <td class="border border-gray-300 px-4 py-2">$400</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 px-4 py-2">Only Attending</td>
                    <td class="border border-gray-300 px-4 py-2">₹2500</td>
                    <td class="border border-gray-300 px-4 py-2">₹3000</td>
                    <td class="border border-gray-300 px-4 py-2">$50</td>
                    <td class="border border-gray-300 px-4 py-2">$75</td>
                </tr>
            </tbody>
        </table>
        <br>
    </div>
    <div class="sm:hidden mx-2">
        <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader>IEEE Student Member</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This category is for students who are current members of the IEEE. It offers a discounted registration fee for attending the conference.</p>
                        <div>
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹6000</li>
                                        <li>International Delegates: $100</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹6400</li>
                                        <li>International Delegates: $125</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Non-IEEE Student Member</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This category is designed for students who are not members of the IEEE. Non-member students can still register for the conference but at a slightly higher fee than IEEE student members.</p>
                        <div>
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹7500</li>
                                        <li>International Delegates: $150</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹8000</li>
                                        <li>International Delegates: $200</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>IEEE Professional Member</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This category is for professionals who are members of IEEE. It provides a discounted rate for conference registration compared to non-members.</p>
                        <div>
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹6000</li>
                                        <li>International Delegates: $100</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹6400</li>
                                        <li>International Delegates: $125</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="3">
                <AccordionHeader>Non-IEEE Professional Member</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This category is intended for professionals who are not affiliated with IEEE. These individuals can attend the conference by paying a higher fee compared to IEEE members.</p>
                        <div>
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹7500</li>
                                        <li>International Delegates: $150</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹8000</li>
                                        <li>International Delegates: $200</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="4">
                <AccordionHeader>Conference with Pre-Conference workshop - IEEE Member</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This category offers a package for IEEE members to attend both the main conference and a pre-conference workshop. This provides an additional learning opportunity before the main event.</p>
                        <div>
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹9500</li>
                                        <li>International Delegates: $250</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹10000</li>
                                        <li>International Delegates: $300</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="5">
                <AccordionHeader>Conference with Pre-Conference workshop - Non-IEEE Member</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This package is for non-IEEE members who wish to attend both the main conference and a pre-conference workshop. It includes access to additional educational content before the conference.</p>
                        <div >
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹12000</li>
                                        <li>International Delegates: $350</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹12500</li>
                                        <li>International Delegates: $400</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="6">
                <AccordionHeader>Only Attending</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        <p class="text-gray-600 mb-4">This category is for attendees who only wish to attend the conference without participating in any pre-conference workshops. It is suitable for individuals seeking a more straightforward attendance option.</p>
                        <div >
                            <strong class="text-gray-800">Pricing:</strong>
                            <ul class="list-disc list-inside text-gray-600">
                                <li><strong>Early Bird:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹2500</li>
                                        <li>International Delegates: $50</li>
                                    </ul>
                                </li>
                                <li><strong>Regular:</strong>
                                    <ul class="ml-4">
                                        <li>Indian Delegates: ₹3000</li>
                                        <li>International Delegates: $75</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </p>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
    <div class="grid grid-rows-2 my-4">
        <p class="text-center font-extralight pb-3">To register, you must first complete this form. After submitting the form, you will be forwarded to the IEEE website to complete the registration process.</p>
        <div class="flex w-full justify-center">
            <button type="button" class="flex-none rounded-md bg-blue-900 px-3.5 xl:py-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900" @click="visible=true">Register</button>
        </div>
    </div>
    <Dialog v-model:visible="visible" modal header="Register For ICCIII MASTER" :style="{ width: '25rem' }">
        <div v-if="!loading">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">We'll never share your email or phone number with anyone else.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="name" class="font-light w-24">Name</label>
                <InputText v-model="name" id="name" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="institution" class="font-light w-24">Institution</label>
                <InputText v-model="ins" id="institution" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label class="font-light">Pre-conference workshop</label>
                <Checkbox v-model="pcw" id="preconferenceworkshop" :binary="true" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="pn" class="font-light w-24">Phone Number</label>
                <InputText id="pn" v-model="pn" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-light w-24">Email</label>
                <InputText id="email" v-model="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <button label="Cancel" @click="visible = false" class="bg-red-600 p-2 m-2 text-white rounded-lg">Cancel</button>
                <button label="Register" @click="register()" class="bg-blue-900 p-2 m-2 text-white rounded-lg">Register</button>
            </div>
        </div>
        <div v-else class="bg-white p-4 rounded-lg w-full h-[350px] flex justify-center items-center">
            <ProgressSpinner></ProgressSpinner>
        </div>
    </Dialog>
    <Toast/>
</template>

<script setup>
    import Dialog from 'primevue/dialog';
    import InputText from 'primevue/inputtext';
    import Checkbox from 'primevue/checkbox';
    import { ref } from 'vue'
    import Accordion from 'primevue/accordion';
    import AccordionPanel from 'primevue/accordionpanel';
    import AccordionHeader from 'primevue/accordionheader';
    import AccordionContent from 'primevue/accordioncontent';
    import ProgressSpinner from 'primevue/progressspinner';
    import axios from 'axios'
    import { useToast } from 'primevue/usetoast';
    import Toast from 'primevue/toast';

    const toast = useToast()

    const visible = ref()
    const loading = ref(false)

    const name = ref()
    const ins = ref()
    const pcw = ref()
    const pn = ref()
    const email = ref()

    function register(){
        loading.value = true
        const formData = new FormData()
        formData.append('Name', name.value); 
        formData.append('Institution', ins.value); 
        formData.append('Pre_Conference_Workshop', pcw.value == true?"on":"off"); 
        formData.append('Phone_Number', pn.value); 
        formData.append('Email', email.value); 

        axios.post("https://script.google.com/macros/s/AKfycbz_9-yIkZnwP2D5VYlKbHwLMOj1i7kqAXIwtIB5bdt61Ej3GAKVpb2yEVoWa7Hk0S8v/exec", formData).then(res => {
            if (res.data.result == "success"){
                toast.add({ severity: 'success', summary: 'Success', detail: 'Thank You For Your Interest', life: 3000 });
                loading.value = false;
                visible.value = false;
                window.location.href = 'https://www.ieee.org/';
            }
        }).catch(err => {
            console.log(err)
            toast.add({ severity: 'error', summary: 'Error', detail: 'Please Try Again Later', life: 3000 });
            loading.value = false;
            visible.value = false;
        })

        name.value = ""
        ins.value = ""
        pcw.value = null
        pn.value = ""
        email.value = ""
    }
</script>