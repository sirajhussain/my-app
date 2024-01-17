<template>
    <div>
        <el-form :model="movieData" :rules="rules" ref="movieForm" label-width="130px">
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
                <el-date-picker v-model="movieData['Release Date']" type="date" placeholder="Select date"></el-date-picker>
            </el-form-item>
            <el-form-item label="MPAA Rating">
                <el-input-number v-model="movieData['MPAA Rating']" :min="1" :max="10"></el-input-number>
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
                <el-radio-group v-model="movieData['Major Genre']">
                    <el-radio label="Drama">Drama</el-radio>
                    <el-radio label="Comedy">Comedy</el-radio>
                    <el-radio label="Musical">Musical</el-radio>
                    <el-radio label="Adventure">Adventure</el-radio>
                    <el-radio label="Action">Action</el-radio>
                </el-radio-group>
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
            <el-form-item label="In Stock">
                <el-switch v-model="movieData['Available']" active-color="#13ce66" inactive-color="#ff4949">
                </el-switch>
            </el-form-item>
            <!-- You can add more form items for each property in the movieData object -->
            <el-form-item>
                <el-button type="primary" @click="submitForm('movieForm')">Create</el-button>
                <el-button @click="resetForm('movieForm')">Reset</el-button>
            </el-form-item>
        </el-form>
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
                "Major Genre": "Drama",
                "Creative Type": "Dramatization",
                Director: "Brian De Palma",
                "Rotten Tomatoes Rating": 81,
                "IMDB Rating": 8,
                "IMDB Votes": 86097,
                "Available": false

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
                Title: [
                    { required: true, message: 'Please input Title', trigger: 'blur' },
                    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                ],
                "Release Date": [
                    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        ...mapActions(["addMovie", "fetchDistributors"]),
        submitForm(formName) {
            console.log(formName)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.movieData);
                    this.addMovie(this.movieData);
                    this.$router.push('/moviesList');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            console.log("Im here" + formName)
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