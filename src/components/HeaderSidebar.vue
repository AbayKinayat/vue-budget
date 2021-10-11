<template>
  <div class="header__wrapper">
    <header class="header">
      <div class="personal-area_wrapper">
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 16 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="personal-area__icon"
        >
          <g
            id="Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Rounded" transform="translate(-138.000000, -4102.000000)">
              <g id="Social" transform="translate(100.000000, 4044.000000)">
                <g
                  id="-Round-/-Social-/-person"
                  transform="translate(34.000000, 54.000000)"
                >
                  <g>
                    <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                    <path
                      d="M12,12 C14.21,12 16,10.21 16,8 C16,5.79 14.21,4 12,4 C9.79,4 8,5.79 8,8 C8,10.21 9.79,12 12,12 Z M12,14 C9.33,14 4,15.34 4,18 L4,19 C4,19.55 4.45,20 5,20 L19,20 C19.55,20 20,19.55 20,19 L20,18 C20,15.34 14.67,14 12,14 Z"
                      id="personal-area__icon_color"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <nav>
        <ul class="nav-links">
          <li class="nav-link">
            <div
              v-show="$route.name === 'Transaction'"
              class="active-line"
            ></div>
            <router-link active-class="active" :to="{ name: 'Transaction' }">
              <svg
                class="transaction-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 58.67"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M56,10.67H50.67v-8a2.67,2.67,0,0,0-5.34,0v8H18.67v-8a2.67,2.67,0,0,0-5.34,0v8H8a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H56a8,8,0,0,0,8-8v-32A8,8,0,0,0,56,10.67Zm2.67,40A2.67,2.67,0,0,1,56,53.33H8a2.67,2.67,0,0,1-2.67-2.66V32H58.67Zm0-24H5.33v-8A2.68,2.68,0,0,1,8,16h5.33v2.67a2.67,2.67,0,0,0,5.34,0V16H45.33v2.67a2.67,2.67,0,0,0,5.34,0V16H56a2.68,2.68,0,0,1,2.67,2.67Z"
                    />
                    <rect
                      class="cls-1"
                      x="42.67"
                      y="37.44"
                      width="10.67"
                      height="10.67"
                      rx="2.67"
                      ry="2.67"
                    />
                  </g>
                </g>
              </svg>
            </router-link>
          </li>
          <li class="nav-link">
            <div v-show="false" class="active-line"></div>
            <svg
              class="statistic-icon"
              viewBox="0 0 35 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M31.9985 11.9666H23.2485V27.7369H21.061V4.08139H12.311V27.7369H10.1235V16.6977H1.37353V27.7369H-0.813965V29.3139H1.37353H10.1235H12.311H21.061H23.2485H31.9985H34.186V27.7369H31.9985V11.9666Z"
                  class="statistic-icon_color"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="35" height="31" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </li>
          <li class="nav-link">
            <button @click="$emit('showModal')" class="add-item_circle">
              +
            </button>
          </li>
          <li class="nav-link">
            <div v-show="$route.name === 'Budget'" class="active-line"></div>
            <router-link active-class="active" :to="{ name: 'Budget' }">
              <svg
                width="36"
                height="26"
                viewBox="0 0 36 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5555 0H4.27774C3.32001 0 2.40151 0.380455 1.7243 1.05767C1.04708 1.73488 0.666626 2.65338 0.666626 3.61111L0.666626 22.3889C0.666626 23.3466 1.04708 24.2651 1.7243 24.9423C2.40151 25.6195 3.32001 26 4.27774 26H29.5555C30.5132 26 31.4317 25.6195 32.109 24.9423C32.7862 24.2651 33.1666 23.3466 33.1666 22.3889V20.2222C33.1666 19.8391 33.0144 19.4717 32.7436 19.2008C32.4727 18.93 32.1053 18.7778 31.7222 18.7778H31C29.4676 18.7778 27.998 18.1691 26.9145 17.0855C25.8309 16.002 25.2222 14.5324 25.2222 13C25.2222 11.4676 25.8309 9.99804 26.9145 8.91449C27.998 7.83095 29.4676 7.22222 31 7.22222H31.7222C32.1053 7.22222 32.4727 7.07004 32.7436 6.79915C33.0144 6.52827 33.1666 6.16087 33.1666 5.77778V3.61111C33.1666 2.65338 32.7862 1.73488 32.109 1.05767C31.4317 0.380455 30.5132 0 29.5555 0V0Z"
                  class="budget-icon"
                />
                <path
                  d="M31 10.1111H33.8889C34.272 10.1111 34.6394 10.2633 34.9102 10.5342C35.1811 10.8051 35.3333 11.1725 35.3333 11.5556V14.4444C35.3333 14.8275 35.1811 15.1949 34.9102 15.4658C34.6394 15.7367 34.272 15.8889 33.8889 15.8889H31C30.2338 15.8889 29.499 15.5845 28.9572 15.0427C28.4154 14.501 28.1111 13.7662 28.1111 13C28.1111 12.2338 28.4154 11.499 28.9572 10.9572C29.499 10.4155 30.2338 10.1111 31 10.1111Z"
                  class="budget-icon"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderSidebar",
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.header__wrapper {
  display: flex;
  align-items: center;
  height: 100vh;
}

.header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: calc(100vh - 5vh);
  background-color: $primary-color;
  border-radius: 40px;
  padding: 33px 23px;
}

.personal-area_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 33px;
  width: 47px;
  height: 47px;

  border: 2px solid $active-color;
  border-radius: 50%;
}

.personal-area__icon {
  width: 18px;
  height: 18px;
}

#personal-area__icon_color {
  fill: $icon-color;
}

.budget-icon {
  fill: $icon-color;
}

.transaction-icon {
  width: 36px;
  height: 32px;
  fill: $icon-color;
}

.statistic-icon {
  width: 35px;
  height: 31px;
}

.statistic-icon_color {
  fill: $icon-color;
}

.add-item_circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: #fff;
  font-size: 45px;
  font-weight: 500;
  cursor: pointer;

  background-color: $active-color;
  border: none;
  border-radius: 50%;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link {
  position: relative;
  margin-bottom: 70px;
  transition: .2s ease;

  &:hover {
    filter: brightness(1.1);
  }
}

a.active {
  .transaction-icon {
    fill: #fff;
  }

  .budget-icon {
    fill: #fff;
  }
}

.active-line {
  position: absolute;
  top: 50%;
  left: -42px;
  transform: translateY(-50%);
  width: 2px;
  height: 36px;

  background-color: $active-color;
}
</style>
