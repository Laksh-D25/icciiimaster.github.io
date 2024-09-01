<template>
    <DataTable :value="names.chiefpatrons" class="p-10">
        <Column field="Name" header="Name"></Column>
        <Column field="Role" header="Title"></Column>
    </DataTable>
</template>

<script setup>
    import { ref } from 'vue'
    import Button from "primevue/button"
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

    const nameRef = ref()

    const names = {
            advisoryCommittee: [
                {Name: "Dr PARAMESHACHARI", Role: "IEEE Student Chapter Chair, Bengaluru"},
                {Name: "Dr Fr. BENNY THOMAS", Role: "Director, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr Fr. BIJU K C", Role: "Associate Director, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Fr. VINOD MICHAEL", Role: "Administrative Officer, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr JOBY THOMAS", Role: "Dean, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr RAGHUNANDAN", Role: "Associate Dean, CHRIST (Deemed to be University)"}
            ],
            chiefpatrons: [
                {Name: "Dr Fr Varghese Vithayathil", Role: "Chancellor, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr Fr Joseph C C", Role: "Vice Chancellor, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            financeCommittee: [
                {Name: "Fr. VINOD MICHAEL", Role: "Administrator, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr JAYAPRIYA J", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr KALPANA P", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr GAYATHRY S WARRIAR", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            generalChairs: [
                {Name: "Dr SIVA BALAN R V", Role: "Associate Professor, Department of Computer Science BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr RAJU RAMAKRISHNA GONDKAR", Role: "Professor, Department of Computer Science BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr J. LOVELINE ZEEMA", Role: "Assistant Professor, Department of Computer Science BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            honoraryChairs: [
                {Name: "Dr JOBY THOMAS", Role: "Dean, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr PARAMESHACHARI", Role: "IEEE Student Chapter Chair, Bengaluru"},
                {Name: "Dr VINAY M", Role: "Computer Science Programme Coordinator, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            logisticsAndHospitality: [
                {Name: "Dr RAM KUMAR S", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr ASWIN I C", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr JAYADURGA", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            organizingCommittee: [
                {Name: "Dr VINAY M", Role: "Programme Co-Ordinator, Department of Computer Science BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr RAJU RAMAKRISHNA GONDKAR", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr SIVA BALAN R V", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr J.LOVELINE ZEEMA", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr DEEPA S", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr BALAKRISHNAN C", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr RAMKUMAR S", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr KALPANA P", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr TEENA JOSE", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr GOBINATH R", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr JAYAPRIYA J", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr KOKILAVANI T", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr SUGANTHI", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr STEPHEN R", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr GAYATHRY S WARRIER", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr SINDHU V", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr MAHALAKSHMI J", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr JAYADURGA R", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr LAXMI BASAPPA DHARMANNAVAR", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr ASWIN I C", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            patrons: [
                {Name: "Dr Fr. VIJU P D CMI", Role: "Pro-Vice Chancellor, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr Fr. BENNY THOMAS", Role: "Director, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr Fr. JOSEPH VARGHESE KUREETHARA", Role: "CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr Fr. BIJU K C", Role: "Associate Director, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Fr. VINOD MICHAEL", Role: "Administrative Officer, BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            pubcom: [
                {Name: "Dr BALAKRISHNAN C", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr DEEPA S", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr SIKHAR TYAGI", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            publicitycom: [
                {Name: "Dr DEEPA S", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr TEENA JOSE", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr BALAKRISHNAN C", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr MAHALAKSHMI J", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr GAYATHRY S WARRIER", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            sescom: [
                {Name: "Dr LAXMI DHARMANNAVAR", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr GAYATHRY S WARRIAR", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"},
                {Name: "Dr MAHALAKSHMI J", Role: "BYC Campus, CHRIST (Deemed to be University), Bangalore, India"}
            ],
            stuBranch: [
                {Name: "AANISHA BASAK", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ADITHYA C P", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ALEENA PAUL K", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "CATHARIN NIVITHA P", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "DEVA NANDAN S", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "EVANGILIN K", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AAN MARIA JAMES", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ADITI SINGH", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ANGELINE A", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ASHWINI S R", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "BLESSY LOUIS", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"}
            ],
            stuChapter: [
                {Name: "HARINI R", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JANITA DEVASSY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JINTA MARIAM KURIAN", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JOEL JAISON", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KARUN BAJI", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "LAKSHMI GOPINATH", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MADHUSNATA KAR", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MUTHA KAVITHA", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NANDANA KRISHNAN S", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NEHALAL D S", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NIDHI BENNY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NISHITA SHEKHAR BALA", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "PARVATHI P M", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SIBIX JOY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SREE VANI BANDI", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "TESSA S MAMPILLY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "YASHASWI D", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "PAYAL", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "HINGORANI BHUMIKA SHANKARLAL", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JOSLYN BIJU", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KARINA SEBASTIAN", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KEERTHI T N", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "M POOJA", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "PRITHA CHOUDHURY", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RIYA BANSILAL MULANI", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SAKSHI PURSWANI", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AKSHAT GARG", Role: "4BCA A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ARUSH DUA", Role: "4BCA A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AKSHAT AGRAWAL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AMOGH SAHORE", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ANKIT KUMAR SAHOO", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "DARSHAN CHOPRA", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "GULGULIA KHUSH PRADEEP", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KRISHNA NAND KUMAR", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MADHAV BHATNAGAR", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MIR HASIBUL RAHMAN", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NISHIT AGARWAL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RISHI RAJ", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RUDRAKSH GOHIL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RYAN NOLASCO D MELLO", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SHORYA RAWAL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SOORAJ SHINE", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ANGEL BLESSY", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SHAMBHAVI SINHA", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"}
            ],
            stuVol: [
                {Name: "AANISHA BASAK", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ADITHYA C P", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ALEENA PAUL K", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "CATHARIN NIVITHA P", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "DEVA NANDAN S", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "EVANGILIN K", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AAN MARIA JAMES", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ADITI SINGH", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ANGELINE A", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ASHWINI S R", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "BLESSY LOUIS", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "HARINI R", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JANITA DEVASSY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JINTA MARIAM KURIAN", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JOEL JAISON", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KARUN BAJI", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "LAKSHMI GOPINATH", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MADHUSNATA KAR", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MUTHA KAVITHA", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NANDANA KRISHNAN S", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NEHALAL D S", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NIDHI BENNY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NISHITA SHEKHAR BALA", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "PARVATHI P M", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SIBIX JOY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SREE VANI BANDI", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "TESSA S MAMPILLY", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "YASHASWI D", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "PAYAL", Role: "3MDS A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "HINGORANI BHUMIKA SHANKARLAL", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "JOSLYN BIJU", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KARINA SEBASTIAN", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KEERTHI T N", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "M POOJA", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "PRITHA CHOUDHURY", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RIYA BANSILAL MULANI", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SAKSHI PURSWANI", Role: "3MDS B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AKSHAT GARG", Role: "4BCA A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ARUSH DUA", Role: "4BCA A BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AKSHAT AGRAWAL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "AMOGH SAHORE", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ANKIT KUMAR SAHOO", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "DARSHAN CHOPRA", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "GULGULIA KHUSH PRADEEP", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "KRISHNA NAND KUMAR", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MADHAV BHATNAGAR", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "MIR HASIBUL RAHMAN", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "NISHIT AGARWAL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RISHI RAJ", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RUDRAKSH GOHIL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "RYAN NOLASCO D MELLO", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SHORYA RAWAL", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SOORAJ SHINE", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "ANGEL BLESSY", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"},
                {Name: "SHAMBHAVI SINHA", Role: "4BCA B BYC CAMPUS, CHRIST (DEEMED TO BE UNIVERSITY), BANGALORE, INDIA"}
            ],
            techCom:[]
        }
    
</script>