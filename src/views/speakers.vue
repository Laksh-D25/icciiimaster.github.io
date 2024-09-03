<template>
    <h1 class="text-center text-5xl font-bold p-4">Keynote Speaker</h1>
    <div class="mx-10 rounded-md shadow-lg border-2 border-gray-300 my-5 flex xl:flex-row flex-col p-4">
        <div class="flex flex-col justify-center items-center mx-10">
            <img :src="keynote" alt="Dr. Snehalata Huzurbazar" class="h-auto w-auto rounded-md">
            <h1 class="text-center text-xl font-bold">Dr. Snehalata Huzurbazar</h1>
        </div>
        <div class="flex items-start text-justify xl:text-md">
            Dr. Snehalata Huzurbazar has been working at the Nell Hodgson Woodruff School of Nursing since early 2024 with a 
            secondary position as Director of the provisional AI track in the Nursing PhD program. 
            Most recently, she was Professor of Data Science and Associate Director in the School of Mathematical and Data Sciences at 
            West Virginia University (WVU), where she founded the Data Science program in 2020. She was Chair of Biostatistics at WVU (2017-2019), 
            Professor of Statistics at the University of Wyoming (1995-2017), and Deputy Director (2012-14) of the NSF’s Statistical and 
            Applied Mathematical Sciences Institute in North Carolina. Earlier in her career, she was a Visiting Scientist at the 
            Institute of Arctic and Alpine Research at the University of Colorado, Boulder and she also initiated and obtained NIJ funding to start the 
            STOP Violence program at the Univ of Wyoming. She is a Fellow of the American Statistical Association and an Elected Member of the 
            International Statistical Institute. Her methodological and interdisciplinary research is now at the intersection of statistics and 
            data science, with a view towards uncertainty quantification. She earned her PhD in Statistics from Colorado State University, her MA in 
            Economics from Vanderbilt University and her BA from Grinnell College. 
            She is one of the two statistical editors for the journal Anesthesiology
        </div>
    </div>

    <h1 class="text-center text-5xl font-bold p-4">Speaker</h1>
    <div class="mx-10 rounded-md shadow-lg border-2 border-gray-300 my-5 xl:flex xl:flex-row p-4 hidden">
        <div class="flex items-start text-justify text-sm">
            Hiroki Sayama is a SUNY Distinguished Professor in the Department of Systems
            Science and Industrial Engineering, and the Director of the Binghamton Center of Complex
            Systems (CoCo), at Binghamton University, State University of New York, USA. He also
            serves as a non-tenure-track Professor in the School of Commerce at Waseda University, Japan,
            an External Faculty member of the Vermont Complex Systems Center at the University of
            Vermont, USA, and a Visiting Professor in the School of Sciences at Christ University
            Pune/Lavasa Campus, India. He received his B.Sc., M.Sc. and D.Sc. in Information Science,
            all from the University of Tokyo, Japan. He did his postdoctoral work at the New England
            Complex Systems Institute in Cambridge, Massachusetts, USA. His research interests include
            complex dynamical networks, human and social dynamics, collective behaviors, artificial
            life/chemistry, interactive systems, and complex systems education, among others. He is an
            expert on mathematical/computational modeling and analysis of various complex systems. He
            has published more than 230 peer-reviewed journal articles and conference proceedings papers
            and has written or edited 15 books and conference proceedings about complex systems related
            topics. His open-access textbook on complex systems modeling and analysis has been
            downloaded more than 170,000 times globally and has become one of the standard textbooks
            on this subject. He currently serves as the Vice President of the International Society for
            Artificial Life (ISAL), an Elected Council / Executive Committee / CCS Steering Committee
            Member of the Complex Systems Society, a Board member of the Network Science Society
            (NetSci), the Chief Editor of Complexity (Wiley), the Founding Co-Editor-in-Chief of
            Northeast Journal of Complex Systems (NEJCS), an Associate Editor of Artificial Life (MIT
            Press), and as an editorial board member for several other journals.
        </div>
        <div class="flex flex-col w-full mx-20">
            <img :src="Speaker" alt="Dr. Hiroki Sayama, D.Sc." class="h-40 w-auto rounded-md">
            <h1 class="text-center text-lg font-bold">Dr. Hiroki Sayama</h1>
        </div>
    </div>

    <div class="mx-10 rounded-md shadow-lg border-2 border-gray-300 my-5 flex xl:hidden flex-col p-4">
        <div class="flex flex-col justify-center items-center mx-10">
            <img :src="Speaker" alt="Dr. Hiroki Sayama, D.Sc." class="h-auto w-auto rounded-md">
            <h1 class="text-center text-xl font-bold">Dr. Hiroki Sayama, D.Sc.</h1>
        </div>
        <div class="flex items-start text-justify text-md">
            Hiroki Sayama is a SUNY Distinguished Professor in the Department of Systems
            Science and Industrial Engineering, and the Director of the Binghamton Center of Complex
            Systems (CoCo), at Binghamton University, State University of New York, USA. He also
            serves as a non-tenure-track Professor in the School of Commerce at Waseda University, Japan,
            an External Faculty member of the Vermont Complex Systems Center at the University of
            Vermont, USA, and a Visiting Professor in the School of Sciences at Christ University
            Pune/Lavasa Campus, India. He received his B.Sc., M.Sc. and D.Sc. in Information Science,
            all from the University of Tokyo, Japan. He did his postdoctoral work at the New England
            Complex Systems Institute in Cambridge, Massachusetts, USA. His research interests include
            complex dynamical networks, human and social dynamics, collective behaviors, artificial
            life/chemistry, interactive systems, and complex systems education, among others. He is an
            expert on mathematical/computational modeling and analysis of various complex systems. He
            has published more than 230 peer-reviewed journal articles and conference proceedings papers
            and has written or edited 15 books and conference proceedings about complex systems related
            topics. His open-access textbook on complex systems modeling and analysis has been
            downloaded more than 170,000 times globally and has become one of the standard textbooks
            on this subject. He currently serves as the Vice President of the International Society for
            Artificial Life (ISAL), an Elected Council / Executive Committee / CCS Steering Committee
            Member of the Complex Systems Society, a Board member of the Network Science Society
            (NetSci), the Chief Editor of Complexity (Wiley), the Founding Co-Editor-in-Chief of
            Northeast Journal of Complex Systems (NEJCS), an Associate Editor of Artificial Life (MIT
            Press), and as an editorial board member for several other journals.
        </div>
    </div>
</template>

<script setup>
const keynote = './img/keynote.jpeg'
const Speaker = './img/hirokisir.jpeg'
</script>