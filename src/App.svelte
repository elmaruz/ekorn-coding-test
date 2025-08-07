<script lang="ts">
  import StudentCard from './lib/components/StudentCard.svelte';
  import * as data from './lib/data';
  import * as types from './lib/types';
  import * as utils from './lib/utils';

  export const mapStudentDataItemsToStudents = (
    studentsData: readonly types.StudentDataItem[],
  ): types.Student[] =>
    studentsData.map(student => ({
      id: String(student.id),
      name: `${student.firstName} ${student.lastName}`,
      age: utils.calculateAge(new Date(student.birthdate)),
      averageScore: utils.calculateStudentAverageScore(student.scores),
      activeLabel: student.isActive ? 'Yes' : 'No',
    }));

  const students: types.Student[] = mapStudentDataItemsToStudents(
    data.studentsData,
  );

  let showOnlyActive = false;

  $: filteredStudents = showOnlyActive
    ? students.filter(student => student.activeLabel === 'Yes')
    : students;
</script>

<main>
  <div class="students-container">
    <h1>Students</h1>

    <label class="filter-toggle">
      <input type="checkbox" bind:checked={showOnlyActive} />
      Show only active students
    </label>

    <div class="students-grid">
      {#each filteredStudents as student}
        <StudentCard {student}></StudentCard>
      {/each}
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: #efebe5;
    margin: 0;
  }

  main {
    padding: 30px;
    min-height: 100vh;
  }

  .students-container {
    max-width: 1024px;
    margin: 0 auto;
  }

  h1 {
    margin: 0 0 10px 0;
    font-size: 2em;
    font-weight: bold;
    color: #4a3728;
  }

  /* ✅ Styling for the checkbox */
  .filter-toggle {
    display: block;
    margin-bottom: 20px;
    color: #4a3728;
    font-weight: 500;
  }

  .filter-toggle input {
    margin-right: 10px;
  }

  .students-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .students-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .students-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
