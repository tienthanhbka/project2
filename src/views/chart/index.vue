<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="background">
          <span class="subtitle">Nhóm 12: Tracking Fruit</span>
          <span class="title"
            >Biểu đồ theo dõi sự biến đổi tần số của hoa quả</span
          >
        </div>
        <line-chart :chart-data="datacollection"></line-chart>
      </div>
      <span class="footer"
        >© Copyright: Nguyen Tien Thanh - Ngo Quang Minh</span
      >
    </div>
    <!-- <div class="container">
      <div class="row">
        <form class="form" @submit.prevent="addExpenses">
          <h4>Add New Entry</h4>
          <div class="form-group">
            <label>Expenses</label>
            <input
              class="form-control"
              placeholder="How much did you spend today?"
              type="number"
              v-model="expenseamount"
              required
            />
          </div>
          <div class="form-group">
            <label>Income</label>
            <input
              class="form-control"
              placeholder="How much did you earn today?"
              type="number"
              v-model="incomeamount"
              required
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Add New Entry</button>
          </div>
        </form>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Pusher from "pusher-js";
import LineChart from "@/components/Chart/LineChart";
import { db } from "./firebase";
// const socket = new Pusher("3e6b0e8f2442b34330b7", {
//   cluster: "eu",
//   encrypted: true
// });
// const channel = socket.subscribe("finance");

export default {
  name: "home",
  components: { LineChart },
  data() {
    return {
      expense: null,
      income: null,
      date: null,
      expenseamount: null,
      incomeamount: null,
      datacollection: null
    };
  },
  created() {
    //this.fetchData();
    this.fillData();
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      let a = [];
      let b = [];
      db.ref("DataA").on("value", snap => {
        if (snap.val()) {
          Object.values(snap.val()).forEach(element => {
            element.TimeCreate = new Date(
              element.TimeCreate
            ).toLocaleTimeString("en-US");
            console.log(element);
            a.push(element);
          });
        }
      });
      db.ref("DataB").on("value", snap => {
        if (snap.val()) {
          Object.values(snap.val()).forEach(element => {
            element.TimeCreate = new Date(
              element.TimeCreate
            ).toLocaleTimeString("en-US");
            b.push(element);
          });
        }
      });
      let results = a;
      let dateresult = a.map(a => a.Frequence);
      let frequenceresult = b.map(a => a.Frequence);
      //   let incomeresult = results.map(a => a.income);
      //   this.expense = expenseresult;
      this.frequency = frequenceresult;
      this.date = dateresult;

      this.datacollection = {
        labels: this.date,
        datasets: [
          {
            label: "Frequence A",
            backgroundColor: "rgb(255 0 0 / 9%)",
            data: dateresult
          },
          {
            label: "Frequency B",
            backgroundColor: "rgb(0 255 0 / 9%)",
            data: frequenceresult
          }
        ]
      };
    },
    addExpenses() {
      let expense = this.expenseamount;
      let income = this.incomeamount;
      let today = moment().format("MMMM Do YYYY");
      axios
        .post("/expense/add", {
          expense: expense,
          income: income,
          date: today
        })
        .then(response => {
          this.expenseamount = "";
          this.incomeamount = "";
          channel.bind("new-expense", function(data) {
            let results = data.newExpense.data;

            let dateresult = results.map(a => a.date);
            let expenseresult = results.map(a => a.expense);
            let incomeresult = results.map(a => a.income);

            this.expense = expenseresult;
            this.income = incomeresult;
            this.date = dateresult;

            this.datacollection = {
              labels: this.date,
              datasets: [
                {
                  label: "Expense",
                  backgroundColor: "transparent",
                  pointBorderColor: "#f87979",
                  data: this.expense
                },
                {
                  label: "Income",
                  backgroundColor: "transparent",
                  pointBorderColor: "#5bf8bf",
                  data: this.income
                }
              ]
            };
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchData() {
      channel.bind("new-expense", data => {
        let results = data.newExpense.data;
        let dateresult = results.map(a => a.date);
        let expenseresult = results.map(a => a.expense);
        let incomeresult = results.map(a => a.income);

        this.expense = expenseresult;
        this.income = incomeresult;
        this.date = dateresult;

        this.datacollection = {
          labels: this.date,
          datasets: [
            {
              label: "Expense Charts",
              backgroundColor: "#f87979",
              data: this.expense
            },
            {
              label: "Income Charts",
              backgroundColor: "#5bf8bf",
              data: this.income
            }
          ]
        };
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  width: 100%;
  .background {
    width: 100%;
    height: 180px;
    background: #42b983;
    display: block;
    text-align: center;
    background-image: linear-gradient(0deg, #66a0a3, #0277),
      url(https://image.shutterstock.com/image-photo/panoramic-wide-photo-fresh-fruits-260nw-671311078.jpg);
    background-size: cover;
    color: #fff;
    background-position: center;
    .subtitle {
      display: block;
      line-height: 100px;
      font-size: 30px;
      font-weight: 700;
    }
    .title {
      font-size: 18px;
    }
  }
}
.title {
  text-align: center;
  margin-top: 40px;
}
.subtitle {
  text-align: center;
}
.form {
  max-width: 600px;
  width: 100%;
  margin: 20px auto 0 auto;
}
.form h4 {
  text-align: center;
  margin-bottom: 30px;
}
.footer {
  float: right;
  padding: 50px 5px;
  font-size: 10pt;
  font-weight: 700;
  color: #151b1966;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
