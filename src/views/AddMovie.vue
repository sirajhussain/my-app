<template>
    <div>

        <el-form :model="movieData" ref="ruleForm" label-width="120px">
            <el-form-item label="Title">
                <el-input v-model="movieData.Title"></el-input>
            </el-form-item>
            <el-form-item label="US Gross">
                <el-input v-model="movieData['US Gross']"></el-input>
            </el-form-item>
            <el-form-item label="Worldwide Gross">
                <el-input v-model="movieData['Worldwide Gross']"></el-input>
            </el-form-item>
            <el-form-item label="US DVD Sales">
                <el-input v-model="movieData['US DVD Sales']"></el-input>
            </el-form-item>
            <el-form-item label="Production Budget">
                <el-input v-model="movieData['Production Budget']"></el-input>
            </el-form-item>
            <el-form-item label="Release Date">
                <el-input v-model="movieData['Release Date']"></el-input>
            </el-form-item>
            <el-form-item label="MPAA Rating">
                <el-input v-model="movieData['MPAA Rating']"></el-input>
            </el-form-item>
            <el-form-item label="Running Time min">
                <el-input v-model="movieData['Running Time min']"></el-input>
            </el-form-item>
            <el-form-item label="Distributor">
                <el-select v-model="movieData.Distributor" placeholder="Select distributor">
                    <el-option v-for="(item, index) in distributors" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Source">
                <el-input v-model="movieData.Source"></el-input>
            </el-form-item>
            <el-form-item label="Major Genre">
                <el-input v-model="movieData['Major Genre']"></el-input>
            </el-form-item>
            <el-form-item label="Creative Type">
                <el-input v-model="movieData['Creative Type']"></el-input>
            </el-form-item>
            <el-form-item label="Director">
                <el-input v-model="movieData.Director"></el-input>
            </el-form-item>
            <el-form-item label="Rotten Tomatoes Rating">
                <el-input v-model="movieData['Rotten Tomatoes Rating']"></el-input>
            </el-form-item>
            <el-form-item label="IMDB Rating">
                <el-input v-model="movieData['IMDB Rating']"></el-input>
            </el-form-item>
            <el-form-item label="IMDB Votes">
                <el-input v-model="movieData['IMDB Votes']"></el-input>
            </el-form-item>
            <!-- You can add more form items for each property in the movieData object -->
        </el-form>
        <div style="display:none">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
                <el-form-item label="Activity name" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Activity time" required>
                    <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="Pick a date" v-model="ruleForm.date1"
                                style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker type="fixed-time" placeholder="Pick a time" v-model="ruleForm.date2"
                                style="width: 100%;"></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery" prop="delivery">
                    <el-switch v-model="ruleForm.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="Activity type" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="Online activities" name="type"></el-checkbox>
                        <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                        <el-checkbox label="Offline activities" name="type"></el-checkbox>
                        <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources" prop="resource">
                    <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="Sponsorship"></el-radio>
                        <el-radio label="Venue"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            movieData: {
                Title: "The Untouchables",
                "US Gross": 76270454,
                "Worldwide Gross": 76270454,
                "US DVD Sales": null,
                "Production Budget": 25000000,
                "Release Date": "Jun 03 1987",
                "MPAA Rating": null,
                "Running Time min": null,
                Distributor: "Paramount Pictures",
                Source: "Based on TV",
                "Major Genre": "Action",
                "Creative Type": "Dramatization",
                Director: "Brian De Palma",
                "Rotten Tomatoes Rating": 81,
                "IMDB Rating": 8,
                "IMDB Votes": 86097
            },
            movieForm: {
                Title: "",
                USGross: 0,
                WorldwideGross: 0,
                USDVDSales: null,
                ProductionBudget: null,
                ReleaseDate: "",
                MPAARating: null,
                RunningTimeMin: null,
                Distributor: "",
                Source: "",
                MajorGenre: "Action",
                CreativeType: "",
                Director: "",
                RottenTomatoesRating: 0,
                IMDBRating: null,
                IMDBVotes: 0
            },
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: 'Please input Activity name', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: 'Please select Activity zone', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: 'Please select activity resource', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please input activity form', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        ...mapActions(["addMovie", "fetchDistributors"]),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    computed: {
        ...mapState(["distributors"]),
        ...mapGetters(["distributors"]),
    },
    created() {
        this.fetchDistributors();
    },
};
</script>
<style>
.el-row {
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #000716;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>