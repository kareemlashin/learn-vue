<template>
  <div>
    <h1>forms</h1>
    <form>
      <input
        type="text"
        name=""
        id=""
        v-model="form.user"
        @keyup="$v.form.user.$touch()"
        class="form-control"
      />
      <div v-if="$v.form.user.$dirty">
        <div class="error" v-if="$v.form.user.$error">Field is error.</div>

        <div class="error" v-if="!$v.form.user.one">Field is one.</div>

        <div class="error" v-if="!$v.form.user.required">
          Field is required.
        </div>
        <ul class="list__ul">
          <li v-if="$v.form.user.$invalid">Field A is <kbd>$invalid</kbd>.</li>
        </ul>

        <div class="error" v-if="!$v.form.user.minLength">
          Field is minLength.
        </div>

        <div class="error" v-if="!$v.form.user.maxLength">
          Field is maxLength.
        </div>
      </div>

      <input
        type="number"
        name=""
        id=""
        v-model="form.id"
        class="form-control"
      />
      <input type="checkbox" name="" id="" v-model="form.skils" value="12514" />
      <input
        type="checkbox"
        name=""
        id=""
        v-model="form.skils"
        value="000000000000000"
      />
      <input
        type="checkbox"
        name=""
        id=""
        v-model="form.skils"
        value="0147852"
      />
      <input
        type="text"
        name=""
        id=""
        v-model="form.city"
        class="form-control"
        @keyup="$v.form.city.$touch()"
      />
      <div v-if="$v.form.city.$dirty">
        <div class="error" v-if="$v.form.city.$error">Field is error.</div>

        <div class="error" v-if="!$v.form.city.required">
          Field is required.
        </div>
        <ul class="list__ul">
          <li v-if="$v.form.city.$invalid">Field A is <kbd>$invalid</kbd>.</li>
        </ul>
      </div>

      <input type="radio" value="user" name="" id="" v-model="form.type" />
      <input type="radio" value="admin" name="" id="" v-model="form.type" />

      <select name="" id="" v-model="form.select" class="form-control">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </form>

    <div>
      {{ form }}
    </div>
  </div>
</template>

<script>
import {
  minLength,
  required,
  maxLength,
  helpers,
} from "vuelidate/lib/validators";
const one = helpers.regex("alphaNumAndDot", /^[A-z]{5,100}$/i);

export default {
  name: "forms",
  data() {
    return {
      form: {
        user: "",
        id: "",
        skils: [],
        city: "",
        type: "",
        select: "",
      },
    };
  },
  validations() {
    return {
      form: {
        user: {
          required,
          minLength: minLength(5),
          maxLength: maxLength(100),
          one,
        },
        city: {
          required,
        },
      },
    };
  },
};
</script>

<style>
</style>"
