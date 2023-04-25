<template>
  <div class="dropDown" v-click-outside="handleClickOutside">
    <input
      type="search"
      id="search"
      placeholder="Search User..."
      @input="searchResults"
      v-model="seachInput"
    />
    <div v-for="user in filteredList.length ? filteredList : userList" :key="user.id" class="dropDownCards">
      <input type="checkbox" id="checkbox" @change="selectUser(user)" v-model="user.selected"/>
      <div class="dropDownCardImage">
        <img
          :src="user.image"
          alt="user-image"
          v-if="user.image"
          height="100%"
          width="100%"
        />
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 512 512"
          viewBox="0 0 512 512"
          id="user"
        >
          <path
            d="M376.9 175.9c-.3 49.8-31.7 96.2-78.8 113.4-48.2 17.6-102.7 2.8-135.5-36.6-32.4-38.9-36.2-96-10.2-139.1 26-43.3 78.1-66.4 127.7-56.2 49.2 10.1 87.5 50.3 95.5 99.8C376.5 163.4 376.9 169.7 376.9 175.9c.1 9.6 15.1 9.7 15 0-.3-56.7-36-107.9-89.2-127.6-53-19.7-115.2-2.9-151.2 40.7-36.4 44.2-41.7 108.2-11.8 157.4 29.6 48.5 87.3 73.6 142.9 62.8 54.8-10.7 99.1-56.7 107.5-111.9 1.1-7.1 1.7-14.2 1.7-21.3C392 166.3 377 166.3 376.9 175.9zM22.7 469.8c49.5-48.5 111.9-82.8 180.5-94.4 64.5-10.9 131.8-.6 190.7 27.6 35.2 16.9 67.3 39.6 95.3 66.8 6.9 6.7 17.6-3.9 10.6-10.6-51.1-49.4-115.6-85-185.9-97.6-67.8-12.2-137.8-2.8-200.3 26.3C76 405.5 41.8 430.1 12.1 459.2 5.2 465.9 15.8 476.5 22.7 469.8L22.7 469.8z"
          ></path>
        </svg>
      </div>
      <div class="dropDownUserDetails">
        <p class="username">{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
    <button class="dropDownButton">Assign ({{ selectedUsers.length }})</button>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  data() {
    return {
      userList: [
        {
          id: "u1",
          name: "Andrei Rus",
          email: "andrei.rus@gmail.com",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          selected: false
        },
        {
          id: "u2",
          name: "Florin Lazar",
          email: "florin.lazar@ing.ro",
          selected: false
        },
        {
          id: "u3",
          name: "Ioana Popescu",
          email: "ioana.popescu@gmail.com",
          selected: false
        },
      ],
      selectedUsers: [],
      filteredList: [],
      seachInput: ""
    };
  },
  methods: {
    searchResults() {
      if (this.seachInput.length) {
        this.filteredList = this.userList.filter((list) => {
          return list.name
            .toLowerCase()
            .includes(this.seachInput.toLowerCase());
        });
      } else {
        this.filteredList = [];
      }
    },
    selectUser(user) {
        this.selectedUsers.push(user)
        if(user.selected) {
            const arrangedList = this.userList.filter((userDetail) => userDetail.id !== user.id)
            arrangedList.unshift(user)
            this.userList = arrangedList
        }
    },
    handleClickOutside() { 
      this.$emit('close-modal')
    }
  },
};
</script>

<style scoped>
.dropDown {
  max-width: 389px;
  min-height: 428px;
  border-radius: 5px;
  background-color: #f6f6f6;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  padding: 15px 16px 20px 17px;
  font-family: "Inter", sans-serif;
}
.dropDownCards {
  display: flex;
  align-items: center;
  margin-bottom: 17px;
}
.dropDownCards input {
  margin-right: 14px;
}
.dropDownUserDetails {
  margin-left: 10px;
}
.dropDownCardImage {
  background-color: #e9ecef;
  border: 1px solid #5227cc;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dropDownCardImage img {
  object-fit: cover;
  border-radius: 50%;
}
.dropDownCardImage svg {
  height: 32px;
  width: 32px;
}
#search {
  height: 38px;
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  outline: none;
  padding: 9px 16px;
  margin-bottom: 24px;
}
#checkbox {
  width: 16px;
  height: 16px;
}
.dropDownButton {
  height: 38%;
  width: 100%;
  background-color: #e9ecef;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
}
.username {
  font-weight: 600;
  font-size: 20px;
  line-height: 24.2px;
}
</style>