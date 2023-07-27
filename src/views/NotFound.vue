<template>
  <div class="mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8">
    <div
      class="mx-auto max-w-lg flex-1 flex-row-reverse items-center justify-between gap-12 md:flex md:max-w-none"
    >
      <div class="max-w-lg flex-1">
        <img src="../assets/images/not-found.png" />
      </div>
      <div class="mt-12 max-w-lg flex-1 space-y-3 md:mt-0">
        <h3 class="font-semibold text-[#4BA864]">404 Error</h3>
        <p class="text-4xl font-semibold text-gray-800 sm:text-5xl">Page not found</p>
        <p class="text-gray-600">
          Sorry, the page you are looking for could not be found or has been removed.
        </p>
        <router-link to="/"> Go back </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
